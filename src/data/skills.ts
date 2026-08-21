export type Skill = {
    icon: string;
    name: string;
    style?: string;
};

export const dailyDrivers: Skill[] = [
    { icon: "devicon-denojs-plain colored", name: "Deno" },
    { icon: "fa-solid fa-bolt", name: "Fresh", style: "color:#FFDB1E" },
    { icon: "devicon-svelte-plain colored", name: "Svelte" },
    { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
    { icon: "devicon-go-original-wordmark colored", name: "Go" },
    { icon: "devicon-python-plain colored", name: "Python" },
    { icon: "devicon-typescript-plain colored", name: "TypeScript" },
    { icon: "devicon-docker-plain colored", name: "Docker" },
];

export const alsoComfortable: Skill[] = [
    { icon: "devicon-java-plain colored", name: "Java" },
    { icon: "devicon-cplusplus-plain colored", name: "C++" },
    { icon: "devicon-postgresql-plain colored", name: "PostgreSQL" },
    { icon: "devicon-fastapi-plain colored", name: "FastAPI" },
    { icon: "devicon-linux-plain", name: "Linux" },
    { icon: "devicon-tailwindcss-plain colored", name: "Tailwind CSS" },
    { icon: "devicon-vitejs-plain colored", name: "ViteJS" },
    { icon: "devicon-playwright-plain", name: "Playwright" },
];
