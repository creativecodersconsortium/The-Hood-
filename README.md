# The Hood - Bir Billing Hotel Website

This is the website for The Hood, a boutique hotel in Bir Billing, Himachal Pradesh.

## Deployment Instructions

### Important: Image Handling

When deploying this website from GitHub to Vercel, you may encounter issues with images not displaying correctly. This is because binary files like images can sometimes be corrupted during the GitHub upload process.

Follow these steps to ensure images work correctly:

1. **Prepare your images**:
   - Make sure all images are in web-friendly formats (JPG, PNG, WebP)
   - Optimize images for web (compress them to reduce file size)
   - Use consistent naming conventions (all lowercase, hyphens instead of spaces)

2. **Upload images to GitHub**:
   - When uploading images to GitHub, use the GitHub web interface to upload them directly to the `/public/images/` directory
   - Alternatively, if using Git from the command line, make sure to use `git lfs` (Large File Storage) for binary files

3. **Verify images after deployment**:
   - After deploying to Vercel, visit `/test-images.html` on your deployed site to check if images are loading correctly
   - If images are not displaying, you may need to re-upload them directly to Vercel

### Deployment Steps

1. Clone this repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Build the project: `npm run build`
5. Deploy to Vercel:
   - Connect your GitHub repository to Vercel
   - Configure the build settings (use default Next.js settings)
   - Deploy

## Troubleshooting

If images are not displaying correctly after deployment:

1. Check the browser console for errors
2. Visit `/test-images.html` to see which images are problematic
3. Try re-uploading the problematic images directly to the Vercel project
4. Make sure the image paths in the code match the actual file paths in the `/public/images/` directory
5. If all else fails, replace the problematic images with new ones

## Contact

For any issues or questions, please contact the developer.

