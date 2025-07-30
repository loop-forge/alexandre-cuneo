"use client"

import { useState } from "react"
import { Moon, Sun, Mail, Phone, MapPin, Github, Linkedin, Globe, Download, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState<"en" | "fr">("en")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  const translations = {
    en: {
      name: "Alexandre Cuneo",
      title: "Developer",
      description:
        "Full-stack developer with 3+ years of experience building and maintaining web applications using Spring and RESTful APIs. Eager to learn and grow in collaborative environments, with a strong focus on writing clean, maintainable code.",
      downloadPdf: "Download PDF",
      experience: "Experience",
      keyProjects: "Key Projects",
      skills: "Skills",
      education: "Education",
      certifications: "Certifications",
      present: "Present",
      skillCategories: {
        "Back-end": "Back-end",
        "Front-end": "Front-end",
        "DevOps & Tools": "DevOps & Tools",
      },
      experienceData: [
        {
          title: "Consultant",
          company: "Pro BTP",
          period: "2024 - Present",
          description: [
            "Created and integrated multimedia content within SharePoint sites",
            "Managed communication tasks and promoted SharePoint usage across teams",
            "Trained end-users to effectively utilize SharePoint tools",
            "Collaborated with stakeholders to improve content workflows and user adoption",
          ],
        },
        {
          title: "Java Developer",
          company: "AB Croisières",
          period: "2022 - 2024",
          description: [
            "Corrective and evolutionary maintenance of back-end applications using Java 8+ and Spring MVC.",
            "Development of business modules, REST services, and front-end view integration (HTML/CSS/JavaScript).",
            "Participation in Scrum sprints: planning, sprint reviews, and daily stand-ups.",
            "Code reviews, manual testing of features and bug fixes on the website within an Agile environment.",
          ],
        },
        {
          title: "Front-end Developer",
          company: "Momindum",
          period: "2020 - 2021",
          description: [
            "Integrated Adobe XD mockups for enterprise clients ensuring pixel-perfect implementation",
            "Connected and integrated video streaming tools with web pages via API integration",
            "Maintained and enhanced the company's Joomla CMS website for improved performance and features",
            "Collaborated with cross-functional teams in an Agile environment",
          ],
        },
      ],
      projects: [
        {
          title: "Maintenance and development of microservices at AB Croisières",
          description: "https://www.abcroisiere.com/",
        },
        {
          title: "Development of a website for a family business",
          description: "https://famille-durand-vigneron.com/",
        },
      ],
      educationData: [
        {
          degree: "Master métiers du web",
          university: "University of Paris, Marne-la-Vallée",
          period: "2017 - 2019",
        },
        {
          degree: "Bachelor Marketing",
          university: "HEC Montréal",
          period: "2012 - 2016",
        },
      ],
      certificationsData: [
        {
          name: "Oracle Certified Associate",
          detail: "Java Foundations",
        },
        {
          name: "Oracle Certified Professional",
          detail: "Java SE 17 Developer",
        },
        {
          name: "Azure Fundamentals",
          detail: "AZ-900",
        },
      ],
    },
    fr: {
      name: "Alexandre Cuneo",
      title: "Développeur Full-Stack",
      description:
        "Développeur Java passionné avec plus de 5 ans d'expérience dans la création d'applications d'entreprise évolutives. Spécialisé dans l'architecture de microservices, les technologies cloud et les pratiques de développement modernes.",
      downloadPdf: "Télécharger PDF",
      experience: "Expérience",
      keyProjects: "Projets Clés",
      skills: "Compétences",
      education: "Formation",
      certifications: "Certifications",
      present: "Présent",
      skillCategories: {
        "Back-end": "Back-end",
        "Front-end": "Front-end",
        "DevOps & Tools": "DevOps et Outils",
      },
      experienceData: [
        {
          title: "Consultant",
          company: "Pro BTP",
          period: "2024 - Présent",
          description: [
           "Création et intégration de contenus multimédias au sein des sites SharePoint",
            "Gestion des missions de communication et promotion de l’utilisation de SharePoint auprès des équipes",
            "Formation des utilisateurs pour une prise en main efficace des outils SharePoint",
            "Collaboration avec les parties prenantes pour améliorer les flux de contenu et l’adoption par les utilisateurs",
          ],
        },
        {
          title: "Développeur Java",
          company: "AB Croisières",
          period: "2022 - 2024",
          description: [
            "Maintenance corrective et évolutive des applications back-end utilisant Java 8+ et Spring MVC.",
            "Développement de modules métier, services REST, et intégration des vues front-end (HTML/CSS/JavaScript).",
            "Participation aux sprints Scrum : planification, revues de sprint et réunions quotidiennes (daily stand-ups).",
            "Revue de code, tests manuels des fonctionnalités et corrections de bugs sur le site dans un environnement Agile.",
          ],
        },
        {
          title: "Développeur Front-end",
          company: "Momindum",
          period: "2020 - 2021",
          description: [
            "Intégration de maquettes Adobe XD pour des clients grands comptes, garantissant une implémentation fidèle au pixel près",
            "Connexion et intégration d’outils de diffusion vidéo aux pages web via intégration API",
            "Maintenance et amélioration du site CMS Joomla de l’entreprise pour optimiser performances et fonctionnalités",
            "Collaboration avec des équipes pluridisciplinaires dans un environnement Agile",
          ],
        }
      ],
      projects: [
        {
          title: "Maintenance et développement des microservices pour AB Croisières",
          description: "https://www.abcroisiere.com/",
        },
        {
          title: "Développement d'un site web pour une entreprise familliale",
          description: "https://famille-durand-vigneron.com/",
        },
      ],
      educationData: [
        {
          degree: "Master Métiers du Web",
          university: "Université Paris-Est, Marne-la-Vallée",
          period: "2017 - 2019",
        },
        {
          degree: "Licence Marketing",
          university: "HEC Montréal",
          period: "2012 - 2016",
        },
      ],
      certificationsData: [
        {
          name: "Oracle Certified Associate",
          detail: "Fondations Java",
        },
        {
          name: "Oracle Certified Professional",
          detail: "Développeur Java SE 17",
        },
        {
          name: "Principes de base d’Azure",
          detail: "AZ-900",
        },
      ],
    },
  }

  const skillsData = {
    "Back-end": [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "Maven",
    ],
    "Front-end": ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    "DevOps & Tools": [
      "Docker",
      "Azure",
      "Jenkins",
      "Git",
      "MySQL",
      "Apache Tomcat",
      "Jira",
      "Cursor",
      "Eclipse",
      "Suite Adobe",
      "Suite Microsoft",    
    ],
  }

  const t = translations[language]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto p-6">
        {/* Header with Dark Mode Toggle and Language Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={toggleDarkMode} className="rounded-full bg-transparent">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="icon" onClick={toggleLanguage} className="rounded-full bg-transparent">
              <Languages className="h-4 w-4" />
            </Button>
            <Badge variant="secondary" className="text-xs">
              {language === "en" ? "EN" : "FR"}
            </Badge>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              {t.downloadPdf}
            </Button>
          </div>
        </div>

        {/* Personal Information */}
        <Card className="mb-8 border-l-4 border-l-blue-500">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t.name}
                </h1>
                <h2 className="text-xl text-muted-foreground mb-4">{t.title}</h2>
                <p className="text-muted-foreground max-w-2xl">{t.description}</p>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-500" />
                  <span>alexandre.cuneo@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-500" />
                  <span>+33 (06) 95-88-51-30</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <span>Alpes-maritimes, France</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-gray-600" />
                  <span>github.com/loop-forge</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-blue-600" />
                  <span>linkedin.com/in/alexandre-cuneo-197343146/</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-purple-500" />
                  <span>alexcuneo.dev</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Experience */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  {t.experience}
                </h3>
                <div className="space-y-6">
                  {t.experienceData.map((job, index) => (
                    <div key={index} className="relative">
                      {index !== t.experienceData.length - 1 && (
                        <div className="absolute left-0 top-8 w-px h-full bg-border"></div>
                      )}
                      <div className="flex gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 relative z-10"></div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="text-lg font-semibold">{job.title}</h4>
                            <Badge variant="secondary" className="w-fit">
                              {job.period}
                            </Badge>
                          </div>
                          <p className="text-blue-600 font-medium mb-3">{job.company}</p>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {job.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1 h-1 bg-current rounded-full mt-2 flex-shrink-0"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
                  {t.keyProjects}
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-green-500 pl-4">
                    <h4 className="font-semibold text-lg">{t.projects[0].title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{t.projects[0].description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Java 8+</Badge>
                      <Badge variant="outline">Spring MVC</Badge>
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">jQuery</Badge>
                      <Badge variant="outline">MySQL</Badge>
                    </div>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg">{t.projects[1].title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{t.projects[1].description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">WordPress</Badge>
                      <Badge variant="outline">Javascript</Badge>
                      <Badge variant="outline">PHP</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                  {t.skills}
                </h3>
                <div className="space-y-6">
                  {Object.entries(skillsData).map(([category, techs], categoryIndex) => (
                    <div key={categoryIndex}>
                      <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                        {t.skillCategories[category as keyof typeof t.skillCategories]}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                  {t.education}
                </h3>
                <div className="space-y-4">
                  {t.educationData.map((edu, index) => (
                    <div key={index}>
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p className="text-blue-600 font-medium">{edu.university}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>


            {/* Certifications */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
                  {t.certifications}
                </h3>
                <div className="space-y-3">
                  {t.certificationsData.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-green-500" : "bg-blue-500"}`}
                      ></div>
                      <div>
                        <p className="font-medium text-sm">{cert.name}</p>
                        <p className="text-xs text-muted-foreground">{cert.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
