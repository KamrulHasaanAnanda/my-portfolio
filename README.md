# Personal Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 📧 Contact form
- 🔗 Social media links
- 📊 Skills showcase
- 💼 Project portfolio

## Sections

1. **Hero Section** - Introduction and call-to-action buttons
2. **About Section** - Personal information and statistics
3. **Skills Section** - Technology stack showcase
4. **Projects Section** - Featured projects with descriptions
5. **Contact Section** - Contact form and social links

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following in `src/app/page.tsx`:

- **Name**: Replace "John Doe" with your name
- **Title**: Update the hero subtitle
- **About**: Modify the about section text
- **Contact**: Update email and social media links
- **Statistics**: Change the numbers in the about section

### Profile Picture

Replace the placeholder initials "JD" in the hero section with your actual profile picture:

```tsx
// Replace this:
<div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
  <span className="text-4xl font-bold text-white">JD</span>
</div>

// With this:
<Image
  src="/your-photo.jpg"
  alt="Your Name"
  width={128}
  height={128}
  className="w-32 h-32 mx-auto mb-8 rounded-full object-cover"
/>
```

### Projects

Update the projects section with your actual projects:

1. Replace project titles and descriptions
2. Update technology tags
3. Add real links to live demos and GitHub repositories
4. Replace placeholder images with actual project screenshots

### Skills

Modify the skills section to match your technology stack:

1. Add/remove technology icons from `react-icons/si`
2. Update skill names
3. Change icon colors if needed

### Colors and Styling

The portfolio uses a blue color scheme. To change colors:

1. Update the gradient classes (e.g., `from-blue-500 to-purple-600`)
2. Modify button colors (`bg-blue-600`, `hover:bg-blue-700`)
3. Change accent colors throughout the component

### Contact Form

The contact form is currently static. To make it functional:

1. Add form handling logic
2. Integrate with a service like Formspree, Netlify Forms, or your own backend
3. Add form validation

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **Geist Font** - Typography

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue on GitHub.
