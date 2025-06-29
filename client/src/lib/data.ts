export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'branding' | 'uiux';
  liveUrl?: string;
  caseStudyUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Skill {
  id: string;
  name: string;
  percentage: number;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
    github?: string;
    behance?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  avatar: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Modern online store with advanced features',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'web',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: '2',
    title: 'Corporate Website',
    description: 'Professional business presence online',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'web',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: '3',
    title: 'Mobile App Design',
    description: 'Intuitive user experience design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'uiux',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: '4',
    title: 'Brand Identity',
    description: 'Complete visual identity system',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'branding',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: '5',
    title: 'Dashboard Design',
    description: 'Data visualization and analytics',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'web',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: '6',
    title: 'UX Research',
    description: 'User-centered design process',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'uiux',
    liveUrl: '#',
    caseStudyUrl: '#'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    icon: 'fas fa-code',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Implementation']
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
    icon: 'fas fa-palette',
    features: ['User Research', 'Wireframing & Prototyping', 'Visual Design']
  },
  {
    id: '3',
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that drive traffic, engagement, and conversions.',
    icon: 'fas fa-bullhorn',
    features: ['Social Media Management', 'Content Strategy', 'PPC Campaigns']
  },
  {
    id: '4',
    title: 'Brand Identity',
    description: 'Complete brand identity systems that communicate your values and connect with your audience.',
    icon: 'fas fa-crown',
    features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials']
  },
  {
    id: '5',
    title: 'SEO Optimization',
    description: 'Search engine optimization strategies to improve your online visibility and rankings.',
    icon: 'fas fa-search',
    features: ['Keyword Research', 'Technical SEO', 'Content Optimization']
  },
  {
    id: '6',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    icon: 'fas fa-mobile-alt',
    features: ['iOS Development', 'Android Development', 'Cross-Platform Solutions']
  }
];

export const skills: Skill[] = [
  { id: '1', name: 'HTML/CSS', percentage: 95, description: 'Modern web standards' },
  { id: '2', name: 'JavaScript', percentage: 90, description: 'Modern ES6+ features' },
  { id: '3', name: 'React', percentage: 85, description: 'Component architecture' },
  { id: '4', name: 'Node.js', percentage: 75, description: 'Backend development' },
  { id: '5', name: 'Figma', percentage: 90, description: 'UI/UX design' },
  { id: '6', name: 'WordPress', percentage: 80, description: 'CMS development' },
  { id: '7', name: 'SEO', percentage: 85, description: 'Search optimization' },
  { id: '8', name: 'Analytics', percentage: 90, description: 'Data insights' }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'Creative Director',
    bio: 'Passionate about creating digital experiences that inspire and engage users.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#'
    }
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Lead Developer',
    bio: 'Code is poetry. Every line should be beautiful, efficient, and meaningful.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b830?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    socialLinks: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    id: '3',
    name: 'Mike Rodriguez',
    role: 'UX Designer',
    bio: 'Design is not just what it looks like - design is how it works.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    socialLinks: {
      linkedin: '#',
      behance: '#',
      dribbble: '#'
    }
  },
  {
    id: '4',
    name: 'Emma Williams',
    role: 'Marketing Strategist',
    bio: 'Great marketing tells a story that resonates and inspires action.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Davis',
    company: 'CEO, TechStart Inc.',
    content: 'BoxMedia transformed our online presence completely. Their attention to detail and innovative approach exceeded our expectations. The new website increased our conversions by 150%.',
    avatar: 'JD'
  },
  {
    id: '2',
    name: 'Maria Johnson',
    company: 'Founder, Creative Studio',
    content: 'Working with BoxMedia was a game-changer for our brand. They understood our vision and brought it to life with creativity and professionalism. Highly recommended!',
    avatar: 'MJ'
  },
  {
    id: '3',
    name: 'David Wilson',
    company: 'Director, GlobalTech',
    content: 'The team at BoxMedia delivered beyond our expectations. Their technical expertise and creative solutions helped us achieve our digital goals efficiently.',
    avatar: 'DW'
  }
];
