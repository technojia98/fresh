## Project info

**URL**: https://lovable.dev/projects/0442ee58-3786-4537-932c-c52d922593ba

## How can I edit this code?

There are several ways of editing your application.



Simply visit the [Lovable Project](https://lovable.dev/projects/0442ee58-3786-4537-932c-c52d922593ba) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/0442ee58-3786-4537-932c-c52d922593ba) and click on Share -> Publish.

### Deploying to Netlify

You can also deploy this project to Netlify.

1.  **Push to GitHub:** Make sure your code is pushed to a GitHub repository.
2.  **Sign up/Log in to Netlify:** Go to [Netlify](https://www.netlify.com/) and sign up or log in with your GitHub account.
3.  **New Site from Git:** Click on "Add new site" -> "Import an existing project" and choose your GitHub repository.
4.  **Build Settings:** The build settings should be automatically detected from the `netlify.toml` file in this repository.
    *   **Build command:** `npm run build`
    *   **Publish directory:** `dist`
5.  **Deploy:** Click on "Deploy site". Netlify will start building and deploying your project.

### Deploying to TinyHost

You can also deploy this project to TinyHost.

1.  **Push to GitHub:** Make sure your code is pushed to a GitHub repository.
2.  **Sign up/Log in to TinyHost:** Go to [TinyHost](https://tiny.host/) and sign up or log in with your GitHub account.
3.  **Import Project:** Click on "New Project" and select "Import from Git" to connect your GitHub repository.
4.  **Build Settings:** The build settings should be automatically detected from the `vercel.json` file in this repository.
    *   **Build command:** `npm run build`
    *   **Output directory:** `dist`
5.  **Deploy:** Click on "Deploy". TinyHost will start building and deploying your project.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
