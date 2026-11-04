# Architecture
- Keep TanStack Router file-based routes and a client-only Vite entry for this GitHub Pages export, because Pages can serve static files only.
- Bundle the six original images through Vite and use a relative asset base with the current directory as router basepath, because Pages may host under a repository prefix.
- Preserve the birthday route and CSS appearance and behavior; the export changes hosting only.
