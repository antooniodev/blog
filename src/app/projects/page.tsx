import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url?: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "Financy",
    description:
      "Financy é um projeto de controle financeiro com o objetivo de oferecer uma interface intuitiva para gestão financeira, permitindo o controle de receitas, despesas e análises financeiras detalhadas.",
    url: "https://financy-dashboard.vercel.app",
    imageUrl: "/projects/financy.png",
    githubUrl: "https://github.com/antooniodev/financy",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          TypeScript
        </span>
        <span className="rounded-full bg-[#35d432] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Node.js
        </span>
        <span className="rounded-full bg-blue-700 px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          React
        </span>
      </div>
    ),
  },
  {
    name: "Camaleão arquitetura",
    description:
      "Landing page institucional criada para apresentar projetos de arquitetura, contar a história da empresa e mostrar quem são os sócios. O objetivo é atrair novos clientes com um conteúdo visualmente atraente que reforça credibilidade e facilita o contato direto para orçamentos e dúvidas.",
    url: "https://camaleaoarquitetura.com/",
    imageUrl: "/projects/camaleao-lp.png",
    githubUrl: "https://github.com/antooniodev/lp-camaleao-arquitetura",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Typescript
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          TailwindCSS
        </span>
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-none dark:ring-1 dark:ring-zinc-500">
          Next.js
        </span>
      </div>
    ),
  },
  {
    name: "EMA atacadista",
    description:
      "Landing page institucional desenvolvida para a EMA Atacadista, focada em destacar a variedade e qualidade dos materiais de construção oferecidos. O objetivo é atrair novos clientes com informações claras sobre produtos e serviços, além de facilitar o contato direto para orçamentos e dúvidas.",
    url: "https://www.emaatacadista.com.br/",
    imageUrl: "/projects/ema-atacadista.png",
    githubUrl: "https://github.com/antooniodev/ema-atacadista",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#fe6a00] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          HTML
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          CSS
        </span>
        <span className="rounded-full bg-[#fafa4e] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          Javascript
        </span>
      </div>
    ),
  },
  {
    name: "GymLog",
    description:
      "Aplicativo desenvolvido para que usuários registrem seus treinos de forma prática e acompanhem sua evolução ao longo do tempo. O foco está em oferecer uma experiência rápida, intuitiva e visualmente clara, ajudando cada pessoa a monitorar seu progresso e manter a motivação.",
    // url: "https://www.emaatacadista.com.br/",
    imageUrl: "/projects/gymlog.png",
    githubUrl: "https://github.com/GymLogCorp/gym_log",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#38abf8] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
          FLutter
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image
        src={imageUrl}
        width={620}
        height={324}
        alt="Logo for css2wind website"
      />
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        {url &&
        <a
        href={url}
        target="_blank"
        className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-[#ffeced] sm:dark:hover:bg-blue-secondary"
        >
          <Globe strokeWidth={1.4} className="size-5" /> Visit website
        </a>
        }
        <a
          href={githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-[#ffeced] sm:dark:hover:bg-blue-secondary"
        >
          <GitBranch strokeWidth={1.4} className="size-5" /> View code
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projetos
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </>
  );
}
