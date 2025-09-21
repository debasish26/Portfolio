# Public Assets Directory

This directory contains all static assets for the portfolio website. These files are served as-is by the web server.

## Directory Structure

```
public/
├── images/
│   ├── profile/         # Profile pictures and personal images
│   └── projects/        # Project-specific images
│       ├── holymix/     # HolyMix Anime Site images
│       ├── qr-code/     # QR Code Generator images
│       ├── tcp-server/  # TCP Server Application images
│       ├── molecular-calc/ # Molecular Mass Calculator images
│       └── dodi-scraper/   # DODI Repack Scraper images
├── icons/               # Icon files
└── logos/               # Logo files
```

## Usage

To use these assets in your components, you can reference them like this:

```jsx
// Example of using a profile image
<img src="/images/profile/profile-placeholder.svg" alt="Profile" />

// Example of using a project image
<img src="/images/projects/holymix/screenshot.png" alt="HolyMix Screenshot" />
```

## Adding New Assets

When adding new assets:

1. Place them in the appropriate directory
2. Use meaningful file names
3. Consider optimizing images for web use
4. For large images, consider adding both full-size and thumbnail versions
