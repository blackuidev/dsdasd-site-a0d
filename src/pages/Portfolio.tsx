import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SparkleNavbar } from '@/components/ui/sparkle-navbar';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Github, Linkedin, Dribbble, Mail } from 'lucide-react';

// Dummy project data
const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description: "Revamped an online retail platform for improved user experience and conversion rates.",
    image: "https://via.placeholder.com/400x300/F5F5F5/333333?text=Project+1",
    link: "#",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Designed an intuitive mobile application for a leading financial institution, focusing on security and ease of use.",
    image: "https://via.placeholder.com/400x300/F5F5F5/333333?text=Project+2",
    link: "#",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description: "Created a comprehensive dashboard for a B2B SaaS product, enhancing data visualization and user control.",
    image: "https://via.placeholder.com/400x300/F5F5F5/333333?text=Project+3",
    link: "#",
  },
  {
    id: 4,
    title: "Healthcare Platform UI",
    description: "Developed a user-centric interface for a healthcare management system, streamlining patient and doctor interactions.",
    image: "https://via.placeholder.com/400x300/F5F5F5/333333?text=Project+4",
    link: "#",
  },
];

// Dummy skills data for BentoGrid
const skills = [
  { title: "UI Design", description: "Figma, Sketch, Adobe XD" },
  { title: "UX Research", description: "User Interviews, Surveys, Usability Testing" },
  { title: "Prototyping", description: "Figma, Principle, InVision" },
  { title: "Wireframing", description: "Balsamiq, Figma" },
  { title: "Interaction Design", description: "Micro-interactions, Animations" },
  { title: "Information Architecture", description: "Card Sorting, Sitemaps" },
];

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <SparkleNavbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] flex items-center justify-center text-center p-4">
        <div className="z-10 max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Muhilan
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
            UI/UX Designer | Crafting Intuitive & Engaging Digital Experiences
          </p>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Passionate about creating beautiful and functional interfaces that solve real-world problems and delight users.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              View My Work
            </Button>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-600 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Hello! I'm Muhilan, a dedicated UI/UX designer with a keen eye for detail and a passion for human-centered design. My journey in design began with a fascination for how technology interacts with people, and how thoughtful design can bridge the gap between complex systems and intuitive experiences.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I specialize in transforming complex problems into elegant, user-friendly solutions. My process involves deep user research, iterative prototyping, and close collaboration with development teams to ensure designs are not only beautiful but also feasible and impactful.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Expertise</h3>
            <BentoGrid className="max-w-4xl mx-auto">
              {skills.map((skill, i) => (
                <BentoGridItem
                  key={i}
                  title={skill.title}
                  description={skill.description}
                  className="hover:shadow-lg transition-shadow duration-300"
                />
              ))}
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden relative border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Additional project details if needed */}
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="link" className="text-purple-400 hover:text-purple-500">
                  View Case Study →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-red-600 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <Card className="p-8 border border-gray-700">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
              <Input id="name" placeholder="Your Name" className="bg-gray-800 border-gray-700 text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
              <Input id="email" type="email" placeholder="Your Email" className="bg-gray-800 border-gray-700 text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
              <Textarea id="message" rows={5} placeholder="Your Message" className="bg-gray-800 border-gray-700 text-white" />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white">
              Send Message
            </Button>
          </form>
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Linkedin size={28} /></a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Dribbble size={28} /></a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Github size={28} /></a>
            <a href="mailto:muhilan@example.com" className="text-gray-400 hover:text-purple-500 transition-colors"><Mail size={28} /></a>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-gray-800 mt-12">
        <p>&copy; {new Date().getFullYear()} Muhilan. All rights reserved.</p>
        <p>Designed and Developed with ❤️</p>
      </footer>
    </div>
  );
};

export default Portfolio;
