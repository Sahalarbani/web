# Gaming Blog

Welcome to the Gaming Blog project! This is a Next.js application styled with Tailwind CSS, featuring a dark cyberpunk theme. The blog is designed to showcase gaming reviews, news, and articles with a modern and responsive layout.

## Features

1. **Homepage**: Displays a list of the latest blog posts, including titles, thumbnails, short descriptions, and star ratings.
2. **Categories and Tags**: Supports categorization and tagging of posts, with dedicated pages for each category and tag.
3. **Post Details**: Each post includes:
   - Title and full review content
   - Image and video gallery
   - Embedded YouTube videos (if available)
   - Comment section (using Disqus or a custom solution)
   - Rating system (1-5 stars)
4. **Admin Panel**: 
   - Login functionality for admin and author roles
   - Options to add, edit, or delete posts
   - Upload images and videos
   - Manage categories and tags
5. **Multi-Author Support**: Each author has a profile page displaying their posts.
6. **SEO-Friendly**: 
   - Automatic generation of meta tags
   - Well-structured slugs for posts
   - Open Graph tags for social media sharing
7. **Responsive Design**: Mobile-first approach ensuring a great experience on all devices.
8. **Deployment Ready**: Optimized structure and configuration for deployment on Vercel.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/gaming-blog.git
   cd gaming-blog
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Directory Structure

- `public/`: Contains static assets like images and videos.
- `src/`: Main source code for the application.
  - `components/`: Reusable components for various parts of the application.
  - `lib/`: Utility functions for authentication, database interactions, and Markdown parsing.
  - `pages/`: Next.js pages for routing.
  - `styles/`: Global and theme-specific styles.
  - `types/`: TypeScript types and interfaces.
  - `utils/`: Utility functions for SEO, slug generation, and ratings.
- `posts/`: Markdown files for blog posts.
- Configuration files for Next.js, Tailwind CSS, TypeScript, etc.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.