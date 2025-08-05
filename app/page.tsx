"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Brain,
  Database,
  Globe,
  User,
  Briefcase,
  Award,
  FolderOpen,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

const SpaceBackground = () => {
  const cppCodeLines = [
    "#include <iostream>",
    "using namespace std;",
    "int main() {",
    "vector<int> arr;",
    "for(int i=0; i<n; i++)",
    'cout << "Hello World";',
    "return 0;",
    "class Algorithm {",
    "void quickSort(int arr[])",
    "if(left < right) {",
    "int pivot = partition();",
    "merge(arr, l, m, r);",
    "stack<int> st;",
    "queue<int> q;",
    "map<int, int> mp;",
    "auto lambda = [](int x)",
    "template<typename T>",
    "std::unique_ptr<Node>",
    "algorithm::sort(v.begin())",
    "binary_search(arr, target)",
  ]

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Starfield Background */}
      <div className="starfield">
        {[...Array(200)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Nebula */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>

      {/* Asteroids */}
      <div className="asteroids">
        {[...Array(8)].map((_, i) => (
          <div
            key={`asteroid-${i}`}
            className="asteroid"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              transform: `scale(${0.5 + Math.random() * 0.5})`,
            }}
          />
        ))}
      </div>

      {/* Floating C++ Code Lines */}
      <div className="code-lines">
        {[...Array(12)].map((_, i) => (
          <div
            key={`code-${i}`}
            className="code-line"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${25 + Math.random() * 15}s`,
            }}
          >
            {cppCodeLines[Math.floor(Math.random() * cppCodeLines.length)]}
          </div>
        ))}
      </div>

      {/* Flying Robot */}
      <div className="flying-robot">
        <div className="robot-body">
          <div className="robot-head"></div>
          <div className="robot-eye left-eye"></div>
          <div className="robot-eye right-eye"></div>
          <div className="robot-antenna"></div>
          <div className="robot-wing left-wing"></div>
          <div className="robot-wing right-wing"></div>
        </div>
      </div>
    </div>
  )
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Award },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-cyan-400">Ronit Maheshwari</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-cyan-400 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SpaceBackground />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-400/20">
            <img src="/images/ronit-profile.jpeg" alt="Ronit Maheshwari" className="w-full h-full object-cover" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-white">Hi, I'm </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Ronit Maheshwari
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up-delay">
          An aspiring AI/ML engineer and tech enthusiast
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
          <Button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            Explore My Work
          </Button>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a 2nd-year Computer Science and Engineering Student at JECRC University, Jaipur, specializing in
              Artificial Intelligence and Machine Learning. I'm passionate about harnessing the power of technology to
              drive innovation and solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently building a strong foundation in programming and diving deep into Data Structures and Algorithms
              using advanced C++. I believe in continuous learning and staying updated with the latest technological
              advancements.
            </p>
          </div>

          <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/jecrc-university.png" alt="JECRC University" className="w-16 h-16 object-contain" />
                <div>
                  <CardTitle className="text-cyan-400 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Education
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-cyan-500 pl-4">
                  <h3 className="text-xl font-semibold text-white">B.Tech CSE (AI & ML)</h3>
                  <p className="text-cyan-400">JECRC University, Jaipur</p>
                  <p className="text-gray-400">Expected Graduation: 2028</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <img src="/images/gssoc-logo.png" alt="GSSoC 2025" className="w-16 h-16 object-contain rounded-lg" />
                  <div>
                    <CardTitle className="text-xl text-white">Open Source Contributor</CardTitle>
                    <CardDescription className="text-cyan-400 text-lg">
                      GSSoC 2025 (GirlScript Summer of Code)
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                  Current
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Working on collaborative open-source software projects, contributing to various repositories and
                learning from the global developer community.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
                  Open Source
                </Badge>
                <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
                  Collaboration
                </Badge>
                <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
                  Git/GitHub
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "C++"],
    },
    {
      title: "Tools & Platforms",
      icon: Globe,
      skills: ["VS Code", "GitHub", "Google Cloud"],
    },
    {
      title: "Expertise",
      icon: Brain,
      skills: ["Artificial Intelligence", "Machine Learning", "Data Science", "Web Development"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center gap-2">
                  <category.icon className="w-6 h-6" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectsSection = () => {
  const projects = [
    {
      title: "Personal Expense Tracker",
      description:
        "A command-line personal expense tracker written in C, featuring multi-currency support, persistent file storage, and advanced filtering and statistics.",
      tags: ["C Programming", "CLI", "Multi-currency", "File Storage"],
      icon: Database,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
              onClick={() => window.open("https://github.com/ronit23997/Expense-tracker", "_blank")}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <project.icon className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-cyan-500/30 text-cyan-400 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <SpaceBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Get in Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gray-900/30 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>9358584901</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>ronit.24bcon0286@jecrcu.edu.in</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Connect with Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 bg-transparent flex items-center gap-2"
                    onClick={() => window.open("https://www.linkedin.com/in/ronit-maheshwari-6b0363306", "_blank")}
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 bg-transparent flex items-center gap-2"
                    onClick={() => window.open("https://github.com/ronit23997", "_blank")}
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </Button>
                </div>
                <div className="mt-6">
                  <p className="text-gray-300 text-center">
                    Let's connect and explore the possibilities of technology together!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-cyan-500/20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">© 2025 Ronit Maheshwari. Built with passion and code.</p>
      </div>
    </footer>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
