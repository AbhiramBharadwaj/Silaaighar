import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract and map form fields to expected names
    const name = formData.get("fullName") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const cityArea = formData.get("cityArea") as string
    const serviceType = formData.get("serviceType") as string
    const pickupMethod = formData.get("pickupMethod") as string
    const pickupAddress = formData.get("pickupAddress") as string
    const pickupDate = formData.get("pickupDate") as string
    const timeWindow = formData.get("preferredWindow") as string
    const urgency = formData.get("urgency") as string
    const notes = formData.get("notes") as string

    // Parse service details from JSON string
    const serviceDetailsJson = formData.get("serviceDetails") as string
    let serviceDetails = null
    if (serviceDetailsJson) {
      try {
        serviceDetails = JSON.parse(serviceDetailsJson)
      } catch (e) {
        console.error("Failed to parse service details:", e)
      }
    }

    // Collect reference photos
    const referencePhotos: File[] = []
    let photoIndex = 0
    while (formData.has(`referencePhoto_${photoIndex}`)) {
      const photo = formData.get(`referencePhoto_${photoIndex}`) as File
      if (photo && photo.size > 0) {
        referencePhotos.push(photo)
      }
      photoIndex++
    }

    // Validate required fields
    if (!name || !phone || !serviceType || !pickupDate || !timeWindow || !pickupMethod) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const normalizedPickupMethod = pickupMethod.toLowerCase().includes("home")
      ? "pickup-from-home"
      : pickupMethod.toLowerCase().includes("both")
        ? "both"
        : "drop-off"

    if (normalizedPickupMethod === "pickup-from-home" && !pickupAddress) {
      return NextResponse.json({ error: "Pickup address is required for home pickup" }, { status: 400 })
    }

    const normalizedServiceType = serviceType
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace("custom-stitching", "stitching")
      .replace("repair-&-patching", "repair")
      .replace("saree-fall-&-edging", "saree")
      .replace("blouse-design", "blouse")

    if (serviceDetails) {
      // Service-specific validation based on normalized service type
      switch (normalizedServiceType) {
        case "stitching":
          const stitchingDetails = serviceDetails.customStitching
          if (!stitchingDetails?.garmentType || !stitchingDetails?.fabricType) {
            return NextResponse.json(
              { error: "Garment type and fabric type are required for stitching" },
              { status: 400 },
            )
          }
          break
        case "embroidery":
          const embroideryDetails = serviceDetails.embroidery
          if (!embroideryDetails?.technique || !embroideryDetails?.placement) {
            return NextResponse.json({ error: "Embroidery technique and placement are required" }, { status: 400 })
          }
          break
        case "alteration":
          const alterationDetails = serviceDetails.alteration
          if (!alterationDetails?.garmentType || !alterationDetails?.requiredChanges?.length) {
            return NextResponse.json(
              { error: "Garment type and changes are required for alterations" },
              { status: 400 },
            )
          }
          break
        case "repair":
          const repairDetails = serviceDetails.repair
          if (!repairDetails?.issue || !repairDetails?.location) {
            return NextResponse.json({ error: "Issue type and location are required for repairs" }, { status: 400 })
          }
          break
        case "saree":
          const sareeDetails = serviceDetails.saree
          if (!sareeDetails?.workType || !sareeDetails?.sareeMaterial) {
            return NextResponse.json({ error: "Work type and material are required for saree work" }, { status: 400 })
          }
          break
        case "blouse":
          const blouseDetails = serviceDetails.blouse
          if (!blouseDetails?.neckStyle || !blouseDetails?.backStyle) {
            return NextResponse.json(
              { error: "Neck style and back style are required for blouse design" },
              { status: 400 },
            )
          }
          break
      }
    }

    console.log("New enquiry received:", {
      customer: { name, phone, email, cityArea },
      service: { type: serviceType, urgency },
      pickup: {
        method: pickupMethod,
        date: pickupDate,
        timeWindow,
        address: pickupAddress,
      },
      serviceDetails,
      hasPhotos: referencePhotos.length > 0,
      photoCount: referencePhotos.length,
      notes,
    })

    // Here you would typically:
    // 1. Save to database (when integration is added)
    // 2. Send email notification with service details
    // 3. Send SMS confirmation
    // 4. Process uploaded reference photos
    // 5. Calculate pricing based on service complexity and urgency

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      {
        message: "Enquiry submitted successfully",
        enquiryId: `ENQ-${Date.now()}`,
        service: serviceType,
        pickupDate,
        urgency,
        estimatedResponse: "We'll contact you within 24 hours to confirm details",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing enquiry:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
