export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export interface Credential {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  link?: string;
}
