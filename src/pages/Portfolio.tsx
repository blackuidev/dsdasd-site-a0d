import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import SparkleNavbar from '@/components/ui/sparkle-navbar';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Github, Linkedin, Dribbble, Mail } from 'lucide-react';

const Portfolio = () => {
  return (
    <div>
      <SparkleNavbar />
      <h1>My Portfolio</h1>
      {/* Add your portfolio content here */}
    </div>
  );
};

export default Portfolio;
