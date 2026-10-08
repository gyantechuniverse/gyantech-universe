GYANTECH UNIVERSE — NEWS WEBSITE + ADMIN CMS
==============================================

WHAT THIS PACKAGE DOES
- Professional mobile-friendly Hindi-first website using your channel logo.
- Public post feed, category filters and search.
- Admin login panel to create, edit, publish and delete posts.
- Optional cover image upload and related links.
- Uses Supabase for authentication, database and image storage.
- Can be hosted publicly on GitHub Pages for free.

IMPORTANT
The admin CMS will NOT publish real posts until you configure a Supabase project. The website displays sample cards before configuration. No hosting or database can be created from this ZIP alone.

SETUP A — CREATE THE DATABASE AND ADMIN
1. Visit https://supabase.com/ and create a project. Keep your database password private.
2. Open Project Settings / API (or Connect) and copy the Project URL and anon/public publishable key.
   NEVER use a service_role key or secret key in config.js.
3. Open SQL Editor in Supabase. Paste all text from supabase-schema.sql and run it.
4. Open Storage, create a bucket named exactly: post-images. Set it to Public so article cover images can be viewed by website visitors.
5. Open Authentication > Users and add your admin user with your email and a strong password. Disable public signups if you do not need other people to register.
6. Open config.js and replace:
   PASTE_SUPABASE_PROJECT_URL_HERE
   PASTE_SUPABASE_ANON_OR_PUBLISHABLE_KEY_HERE
   with your project URL and anon/public publishable key.

SECURITY NOTE
This starter SQL permits any authenticated user to manage posts. It is suitable only when public signups are disabled and you personally create admin users. For a production site with multiple users, change policies to check a dedicated admin role. Never put a service_role/secret key in browser code. Do not share your admin password.

SETUP B — PUBLISH WEBSITE ON GITHUB PAGES
1. Create a new public GitHub repository, e.g. gyantech-universe-website.
2. Upload every file and folder from this package into the repository root. index.html must be at the root; keep assets/ folder.
3. Go to repository Settings > Pages.
4. Under Build and deployment select Deploy from a branch, branch main, folder /(root), then Save.
5. Wait for the deployment. GitHub Pages will show the public website link.

HOW TO PUBLISH A POST
1. Open your public website.
2. Tap Admin Login.
3. Sign in with the admin email/password created in Supabase.
4. Tap New Post, enter title, category, short summary, full article, optional image and related link.
5. Tap Publish Post. The post should appear in Latest Posts for everyone.
6. Edit/Delete posts from the Admin Panel.

TROUBLESHOOTING
- If posts do not load: check the Supabase URL/key, SQL schema, table policies, and browser console.
- If image upload fails: ensure public bucket post-images exists and Storage policies were created.
- If admin login fails: confirm the user exists in Supabase Authentication > Users.
- If deploying to GitHub Pages: ensure config.js is uploaded and is not accidentally named config.js.txt.

OFFICIAL DOCS
GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
Supabase: https://supabase.com/docs
