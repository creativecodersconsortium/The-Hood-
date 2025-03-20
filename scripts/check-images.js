const fs = require("fs")
const path = require("path")

// Function to check if a file is a valid image
function isValidImage(filePath) {
  try {
    const buffer = fs.readFileSync(filePath)

    // Check for PNG signature
    if (buffer.length > 8 && buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47) {
      return true
    }

    // Check for JPEG signature
    if (buffer.length > 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
      return true
    }

    // Check for GIF signature
    if (buffer.length > 6 && buffer[0] === 0x47 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x38) {
      return true
    }

    return false
  } catch (error) {
    console.error(`Error checking image ${filePath}:`, error)
    return false
  }
}

// Function to create a placeholder image if needed
function createPlaceholder(filePath) {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  // Create a simple SVG placeholder
  const svgContent = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#f0f0f0"/>
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#666" text-anchor="middle">
      ${path.basename(filePath)}
    </text>
  </svg>`

  fs.writeFileSync(filePath, svgContent)
  console.log(`Created placeholder for ${filePath}`)
}

// Check images in public/images directory
const imagesDir = path.join(process.cwd(), "public", "images")

// Create the directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true })
  console.log("Created images directory")
}

// List of expected images
const expectedImages = [
  "the-hood-logo.png",
  "hotel-garden.png",
  "hotel-front.png",
  "hotel-flags.png",
  "hotel-garden-view.png",
  "hotel-lounge.png",
  "hotel-interior.png",
  "hotel-badminton.png",
  "hotel-seating.png",
  "hotel-dartboard.png",
]

// Check each expected image
expectedImages.forEach((imageName) => {
  const imagePath = path.join(imagesDir, imageName)

  if (!fs.existsSync(imagePath)) {
    console.log(`Image ${imageName} not found, creating placeholder`)
    createPlaceholder(imagePath)
  } else if (!isValidImage(imagePath)) {
    console.log(`Image ${imageName} is not valid, creating placeholder`)
    createPlaceholder(imagePath)
  } else {
    console.log(`Image ${imageName} is valid`)
  }
})

console.log("Image check completed")

