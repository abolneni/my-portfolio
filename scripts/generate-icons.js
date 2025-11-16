const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const svgLightPath = path.join(publicDir, 'icon-light.svg');
const svgDarkPath = path.join(publicDir, 'icon-dark.svg');

// Read the SVG files
const svgLightBuffer = fs.readFileSync(svgLightPath);
const svgDarkBuffer = fs.readFileSync(svgDarkPath);

// Generate icons
async function generateIcons() {
  try {
    // Light mode 32x32
    await sharp(svgLightBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'icon-light-32x32.png'));

    // Dark mode 32x32
    await sharp(svgDarkBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'icon-dark-32x32.png'));

    // Apple icon (180x180) - use light version
    await sharp(svgLightBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-icon.png'));

    console.log('✅ Successfully generated all icon files!');
    console.log('  - icon-light-32x32.png');
    console.log('  - icon-dark-32x32.png');
    console.log('  - apple-icon.png');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
