# Photography Portfolio

A modern, responsive photography portfolio built with [Next.js](https://nextjs.org), React, and Tailwind CSS. Showcase your work with smooth animations, a masonry gallery layout, and interactive lightbox functionality.

## Features

- **Responsive Masonry Gallery**: Automatically adapts from 1 to 3 columns based on screen size
- **Interactive Lightbox**: Click on any photo to view full-resolution images with smooth transitions
- **Smooth Animations**: Fade-in effects with staggered timing using Framer Motion
- **Fast Image Loading**: Optimized Next.js Image component for automatic optimization
- **Modern UI**: Dark theme with gradient text and hover effects
- **Social Integration**: Easy links to Instagram and other platforms
- **Camera Details**: Display your equipment information (camera, lens)

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Lightbox**: [Yet Another React Lightbox](https://yet-another-react-lightbox.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or your preferred package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd photography
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your photos:
   - Place your photos (.jpg, .jpeg, .png, .webp) in the `public/photos/` directory
   - The gallery will automatically detect and display all images

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

The page auto-reloads as you make changes to `app/page.tsx` or other components.

### Production Build

Build the project for production:

```bash
npm run build
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
photography/
 app/
    page.tsx          # Main page with header and gallery integration
    Gallery.tsx       # Gallery component with lightbox
    PhotoCard.tsx     # Individual photo card with animation
    layout.tsx        # Root layout and metadata
    globals.css       # Global styles
 public/
    photos/           # Your portfolio photos (add images here)
 package.json          # Project dependencies
 tsconfig.json         # TypeScript configuration
 tailwind.config.ts    # Tailwind CSS configuration
 next.config.ts        # Next.js configuration
```

## Customization

### Update Portfolio Header

Edit `app/page.tsx` to customize:
- Portfolio title
- Bio/description
- Instagram handle
- Camera equipment details

### Modify Gallery Layout

The gallery columns are responsive:
- Mobile: 1 column (`sm:columns-1`)
- Tablet: 2 columns (`sm:columns-2`)
- Desktop: 3 columns (`lg:columns-3`)

Adjust the column counts in `app/Gallery.tsx` if needed.

### Change Colors and Styling

All styling uses Tailwind CSS classes. Key elements:
- Dark background: `bg-[#111]`
- Text gradients and hover effects in component files
- Modify `app/globals.css` for global style changes

## Support & Contributing

For issues, suggestions, or contributions, please open an issue or pull request in the repository.

## License

This project is private. Contact the maintainer for usage inquiries.
