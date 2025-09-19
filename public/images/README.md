# Images Directory for SoussTech Website

This directory is designed to contain high-quality images that will enhance the visual appeal and professional look of the SoussTech website.

## Recommended Images to Add

### 1. Hero Section Images
- **smart-home-hero.jpg** - Modern smart home setup showing connected devices
- **network-installation.jpg** - Professional network/FTTR installation
- **security-system.jpg** - Advanced security camera system

### 2. Service Section Images
- **fttr-installation.jpg** - Clean FTTR fiber installation
- **smart-home-control.jpg** - Smart home control interface
- **security-monitoring.jpg** - Security monitoring setup
- **network-infrastructure.jpg** - Professional network setup

### 3. About/Portfolio Images
- **team-photo.jpg** - Professional team photo
- **before-after/** - Directory for before/after project images
- **client-testimonials/** - Client project photos

### 4. General Assets
- **logo-variants/** - Different logo versions
- **icons/** - Custom service icons
- **backgrounds/** - Subtle background patterns

## Image Specifications

### Quality Requirements
- **Resolution**: Minimum 1920x1080 for hero images
- **Format**: JPG for photos, PNG for graphics with transparency
- **Compression**: Optimized for web (under 500KB per image)
- **Aspect Ratios**: 
  - Hero: 16:9 or 4:3
  - Service cards: 1:1 (square)
  - Portfolio: 4:3 or 3:2

### Style Guidelines
- **Professional**: Clean, modern, high-tech appearance
- **Color Harmony**: Should work well with blue accent (#2563eb)
- **Lighting**: Well-lit, clear, professional photography
- **Composition**: Uncluttered, focused on technology

## Usage in Components

Once images are added, update the following components:

### HeroSection.tsx
```jsx
// Replace placeholder with:
<Image 
  src="/images/smart-home-hero.jpg" 
  alt="Smart Home Technology"
  width={600}
  height={600}
  className="rounded-xl"
/>
```

### ServicesSection.tsx
```jsx
// Add service images to each card
<div className="relative mb-6">
  <Image 
    src="/images/fttr-installation.jpg" 
    alt="FTTR Installation"
    width={400}
    height={300}
    className="rounded-lg"
  />
</div>
```

## Notes for Designer

- Ensure all images align with SoussTech's professional, modern brand
- Focus on showcasing technology integration in residential/commercial spaces
- Highlight the "invisible" and "aesthetic" aspects of installations
- Show diversity in client types (residential and commercial)
- Emphasize security, speed, and smart automation benefits

To add images from your local folder D:\SoussTech\web site\images, simply copy them to this directory and update the component code accordingly.