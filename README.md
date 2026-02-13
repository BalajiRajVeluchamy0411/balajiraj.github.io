# Next.js Portfolio

This is a personal portfolio built with Next.js, showcasing projects, skills, and background information.

## Project Structure

```
nextjs-portfolio
├── src
│   ├── pages
│   │   ├── index.tsx       # Main entry point for the portfolio
│   │   ├── about.tsx       # About page with personal information
│   │   └── projects.tsx     # Projects showcase
│   ├── components
│   │   ├── Header.tsx      # Header component with navigation
│   │   ├── Footer.tsx      # Footer component with copyright info
│   │   └── Resume.tsx      # Component to display resume information
│   ├── styles
│   │   └── globals.css      # Global CSS styles
│   └── lib
│       └── resume.ts        # Data and functions related to the resume
├── public
│   └── resume.pdf           # PDF version of the resume
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
├── next.config.js           # Next.js configuration file
└── README.md                # Project documentation
```

## Features

- Responsive design
- Easy navigation between sections
- Showcase of projects with links to repositories
- Downloadable resume in PDF format

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/nextjs-portfolio.git
   ```

2. Navigate to the project directory:
   ```
   cd nextjs-portfolio
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the portfolio.

## Usage

Feel free to customize the content in the `src/lib/resume.ts` file to update your personal information, work experience, education, and skills. You can also add new projects in the `src/pages/projects.tsx` file.

## License

This project is open-source and available under the MIT License.