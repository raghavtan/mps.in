# MPS.in

A modern personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- 📝 **TypeScript** for type safety
- 🔍 **SEO optimized** with proper metadata
- 📱 **Responsive design** for all devices
- 🌙 **Dark mode** support
- 🚀 **Fast performance** with modern best practices

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 8.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/raghavtan/mps.in.git
cd mps.in
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Project Structure

```
src/
├── app/                 # App Router pages
│   ├── about/          # About page
│   ├── projects/       # Projects page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
├── lib/               # Utility functions
└── styles/            # Additional styles
```

## Deployment

This project is ready to deploy on various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Other Platforms

The project can be deployed to any platform that supports Node.js applications.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Website: [https://mps.in](https://mps.in)
- GitHub: [@raghavtan](https://github.com/raghavtan)