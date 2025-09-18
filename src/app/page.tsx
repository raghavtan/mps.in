"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
    const [open, setOpen] = useState(false);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Replace with your submit handler or API route
        console.log("Thanks! We'll get back to you shortly.");
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Nav */}
            <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
                    <div className="flex items-center gap-3">
                        <div className="size-9 rounded-md bg-primary/10 grid place-items-center">
                            <span className="font-bold text-primary">MPS</span>
                        </div>
                        <span className="font-semibold tracking-tight">MPS Digital</span>
                        <Badge className="ml-2 hidden sm:inline-flex" variant="secondary">
                            Since 1995
                        </Badge>
                    </div>
                    <nav className="hidden items-center gap-6 md:flex">
                        <button onClick={() => scrollTo("home")} className="text-sm hover:text-primary transition-colors">
                            Home
                        </button>
                        <button onClick={() => scrollTo("services")} className="text-sm hover:text-primary transition-colors">
                            Services
                        </button>
                        <button onClick={() => scrollTo("documents")} className="text-sm hover:text-primary transition-colors">
                            Documents
                        </button>
                        <button onClick={() => scrollTo("about")} className="text-sm hover:text-primary transition-colors">
                            About
                        </button>
                        <Button size="sm" onClick={() => scrollTo("contact")}>
                            Contact us
                        </Button>
                    </nav>
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                    <button
                        aria-label="Toggle Menu"
                        className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-muted"
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>
                {open && (
                    <div className="md:hidden border-t bg-background">
                        <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
                            <div className="flex justify-end pb-2">
                                <ThemeToggle />
                            </div>
                            <button onClick={() => scrollTo("home")} className="py-2 text-left hover:text-primary">
                                Home
                            </button>
                            <button onClick={() => scrollTo("services")} className="py-2 text-left hover:text-primary">
                                Services
                            </button>
                            <button onClick={() => scrollTo("documents")} className="py-2 text-left hover:text-primary">
                                Documents
                            </button>
                            <button onClick={() => scrollTo("about")} className="py-2 text-left hover:text-primary">
                                About
                            </button>
                            <Button className="mt-2 w-full" onClick={() => scrollTo("contact")}>Contact us</Button>
                        </div>
                    </div>
                )}
            </header>

            <main>
                {/* Hero */}
                <section id="home" className="relative isolate overflow-hidden pt-28 md:pt-32">
                    <div
                        className="absolute inset-0 -z-10 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1974&auto=format&fit=crop)",
                        }}
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-background/60 to-background" />

                    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <Badge variant="secondary" className="px-3 py-1">Industrial IoT, Web Apps & DevOps</Badge>
                            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
                                MPS Digital — Your Partner in Digital Technologies
                            </h1>
                            <p className="text-muted-foreground md:text-lg">
                                Based in Kanpur, India, we help organizations modernize with Industrial IoT, robust web applications, and DevOps. Nearly three decades of applied engineering across government and manufacturing.
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Button size="lg" onClick={() => scrollTo("contact")}>
                                    Start a project
                                    <ArrowRight className="ml-2 size-4" />
                                </Button>
                                <Button size="lg" variant="secondary" onClick={() => scrollTo("services")}>Our Services</Button>
                            </div>
                            <div className="flex items-center gap-3 pt-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="size-4 text-primary" /> 100% responsive
                                <CheckCircle2 className="size-4 text-primary" /> Accessibility-first
                                <CheckCircle2 className="size-4 text-primary" /> Lightning fast
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-card shadow-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1887&auto=format&fit=crop"
                                    alt="Team collaborating in a modern workspace"
                                    className="size-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-background/10" />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-2xl font-semibold md:text-4xl">What we do</h2>
                        <p className="mt-3 text-muted-foreground md:text-lg">
                            End-to-end solutions in Industrial IoT, Web Applications, and DevOps.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((s) => (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <Card className="h-full">
                                    <CardHeader>
                                        <div className="mb-2 inline-flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                                            {<s.icon className="size-5" />}
                                        </div>
                                        <CardTitle>{s.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-sm text-muted-foreground">{s.description}</p>
                                        <ul className="space-y-2 text-sm">
                                            {s.points.map((pt) => (
                                                <li key={pt} className="flex items-center gap-2">
                                                    <CheckCircle2 className="size-4 text-primary" /> {pt}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Documents */}
                <section id="documents" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 border-t">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-2xl font-semibold md:text-4xl">Documents & Resources</h2>
                        <p className="mt-3 text-muted-foreground md:text-lg">
                            White papers and case studies showcasing our Industrial IoT expertise.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Industry 4.0 and Industrial IoT with MPS Digital",
                            "Industrial IoT for Smart Electrical Energy Management",
                            "IIoT Operational Parameters and IoT Integration",
                        ].map((doc) => (
                            <Card key={doc} className="h-full">
                                <CardHeader>
                                    <CardTitle className="text-base">{doc}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    Contact us at info@mps.in to request a copy.
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* About */}
                <section id="about" className="border-t bg-muted/30">
                    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 grid gap-10 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-semibold md:text-3xl">About MPS Digital</h3>
                            <p className="text-muted-foreground">
                                Founded in the pre-internet era, we have delivered secure networks, robust software, and industry-grade IoT systems for nearly 30 years. From UUCP-based email in 1993 to modern IIoT edge devices with cloud integration in 2023, our journey reflects deep, applied engineering.
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { label: "Years", value: "30+" },
                                    { label: "Team exp.", value: "50+ yrs" },
                                    { label: "Clients", value: "India & abroad" },
                                ].map((stat) => (
                                    <div key={stat.label} className="rounded-lg border p-4 text-center">
                                        <div className="text-xl font-semibold">{stat.value}</div>
                                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                                <li>• 1993: First email exchange via UUCP/ERNET (IIT Kanpur)</li>
                                <li>• 1995: Free BBS and first commercial software delivery</li>
                                <li>• 2004: Internet gateway + firewall + mail server</li>
                                <li>• 2013: First Industrial IoT (RPM logging)</li>
                                <li>• 2023: IIoT Edge devices with Cloud integration</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="space-y-4"
                        >
                            <div className="overflow-hidden rounded-xl border">
                                <img
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1887&auto=format&fit=crop"
                                    alt="Our team at work"
                                    className="aspect-video w-full object-cover"
                                />
                            </div>
                            <p className="text-muted-foreground">
                                We believe in thoughtful design, clean code, and sustainable growth. Let's build something great together.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
                    <div className="grid gap-10 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-semibold md:text-3xl">Let's talk</h3>
                            <p className="text-muted-foreground">
                                Tell us about your project. We'll get back within 1 business day.
                            </p>
                            <div className="flex flex-col gap-3 text-sm">
                                <a href="tel:+919005670232" className="inline-flex items-center gap-2 hover:text-primary">
                                    <Phone className="size-4" /> +91-9005670232
                                </a>
                                <a href="mailto:info@mps.in" className="inline-flex items-center gap-2 hover:text-primary">
                                    <Mail className="size-4" /> info@mps.in
                                </a>
                                <div className="text-muted-foreground">
                                    254, Block H-1, Pandunagar, Kanpur 208005 (INDIA)
                                </div>
                            </div>
                        </motion.div>

                        <motion.form
                            onSubmit={onSubmit}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="space-y-4 rounded-xl border p-4 md:p-6"
                        >
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid gap-2">
                                    <label className="text-sm" htmlFor="name">Name</label>
                                    <Input id="name" name="name" placeholder="Jane Doe" required />
                                </div>
                                <div className="grid gap-2">
                                    <label className="text-sm" htmlFor="email">Email</label>
                                    <Input id="email" name="email" type="email" placeholder="jane@company.com" required />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm" htmlFor="message">Project details</label>
                                <Textarea id="message" name="message" placeholder="Tell us what you have in mind..." rows={5} required />
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <p className="text-xs text-muted-foreground">By submitting, you agree to our terms.</p>
                                <Button type="submit">Send message</Button>
                            </div>
                        </motion.form>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t bg-muted/30">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:px-6">
                    <div className="flex items-center gap-2">
                        <div className="size-6 rounded bg-primary/10 grid place-items-center">
                            <span className="text-xs font-bold text-primary">MPS</span>
                        </div>
                        <span>© {new Date().getFullYear()} MPS Digital. All rights reserved.</span>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={() => scrollTo("home")} className="hover:text-primary">Home</button>
                        <button onClick={() => scrollTo("services")} className="hover:text-primary">Services</button>
                        <button onClick={() => scrollTo("documents")} className="hover:text-primary">Documents</button>
                        <button onClick={() => scrollTo("about")} className="hover:text-primary">About</button>
                        <button onClick={() => scrollTo("contact")} className="hover:text-primary">Contact</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

const services = [
    {
        title: "Web Application Development",
        description:
            "Business and enterprise applications with modern stacks.",
        points: [
            "PHP/Laravel & Python/Django",
            "Geo-location enabled apps",
            "MySQL, MongoDB & NoSQL",
            "APIs & Microservices",
        ],
        icon: CheckCircle2,
    },
    {
        title: "Automation, IoT & IIoT",
        description:
            "From plant-floor telemetry to cloud dashboards and alerts.",
        points: [
            "Industrial process monitoring",
            "Digital Twins & Edge Computing",
            "Visualization, reports & predictive analysis",
            "Embedded & remote monitoring",
        ],
        icon: CheckCircle2,
    },
    {
        title: "System Architecture & Integration",
        description:
            "Design and integrate complex business systems and networks.",
        points: [
            "Enterprise application architecture",
            "Corporate networks & cloud planning",
            "Protocol and platform integration",
            "Legacy to microservices transformation",
        ],
        icon: CheckCircle2,
    },
    {
        title: "IT Infrastructure & DevOps",
        description:
            "Secure, scalable infrastructure with modern delivery practices.",
        points: [
            "Linux servers & cloud administration",
            "DevOps consulting & development",
            "CI/CD pipelines",
        ],
        icon: CheckCircle2,
    },
    {
        title: "Human Machine Technologies",
        description:
            "Interfaces for voice, identity, and operations.",
        points: ["VoIP & IVRS", "Biometric systems"],
        icon: CheckCircle2,
    },
    {
        title: "Data Migration",
        description:
            "Analyze and convert large datasets from legacy systems.",
        points: ["Assessment & planning", "ETL & validation"],
        icon: CheckCircle2,
    },
] as const;