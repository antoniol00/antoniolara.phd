export const site = {
  name: 'Antonio Lara Gutiérrez',
  firstName: 'Antonio',
  lastName: 'Lara Gutiérrez',
  title: 'PhD Candidate & FPU Predoctoral Researcher',
  tagline: 'AI for Cybersecurity',
  description:
    'PhD candidate and FPU predoctoral researcher at the University of Málaga (NICS Lab), working at the intersection of Artificial Intelligence and Cybersecurity.',
  email: 'antoniolaragutierrez2000@gmail.com',
};

export interface Social {
  name: string;
  icon: 'mail' | 'github' | 'linkedin' | 'orcid' | 'scholar' | 'researchgate' | 'lab';
  href: string;
  label: string;
}

export const socials: Social[] = [
  { name: 'email', icon: 'mail', href: `mailto:${site.email}`, label: 'Email' },
  {
    name: 'orcid',
    icon: 'orcid',
    href: 'https://orcid.org/0009-0009-0796-4631',
    label: 'ORCID',
  },
  {
    name: 'scholar',
    icon: 'scholar',
    href: 'https://scholar.google.com/citations?user=5quPVUQAAAAJ&hl=en',
    label: 'Google Scholar',
  },
  {
    name: 'researchgate',
    icon: 'researchgate',
    href: 'https://www.researchgate.net/profile/Antonio-Lara-Gutierrez',
    label: 'ResearchGate',
  },
  {
    name: 'nics',
    icon: 'lab',
    href: 'https://www.nics.uma.es/antonio-lara/',
    label: 'NICS Lab profile',
  },
  { name: 'github', icon: 'github', href: 'https://github.com/antoniol00', label: 'GitHub' },
  {
    name: 'linkedin',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/antonio-lara-gutierrez',
    label: 'LinkedIn',
  },
];

export const nav = [
  { label: 'About', href: '/' },
  { label: 'Activities', href: '/activities' },
  { label: 'Publications', href: '/publications' },
  { label: 'Projects', href: '/projects' },
  { label: 'CV', href: '/cv' },
  { label: 'Gallery', href: '/gallery' },
];
