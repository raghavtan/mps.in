"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Replace with your EmailJS service ID, template ID, and user ID
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current!, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                setIsSubmitted(true);
                setIsSubmitting(false);
            }, (error) => {
                console.log(error.text);
                setIsSubmitting(false);
            });
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Nav */}
            <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
                    <div className="flex items-center gap-3">
                        <div className="size-9 rounded-md bg-primary/10 grid place-items-center">
                            <span className="font-bold text-primary">MPS</span>
                        </div>
                        <span className="font-semibold tracking-tight text-lg">MPS Digital</span>
                        <Badge className="ml-2 hidden sm:inline-flex" variant="secondary">
                            Since 1995
                        </Badge>
                    </div>
                    <nav className="hidden items-center gap-6 md:flex">
                        <button onClick={() => scrollTo("home")} className="text-sm font-medium hover:text-primary transition-colors">
                            Home
                        </button>
                        <button onClick={() => scrollTo("services")} className="text-sm font-medium hover:text-primary transition-colors">
                            Services
                        </button>
                        <button onClick={() => scrollTo("work")} className="text-sm font-medium hover:text-primary transition-colors">
                            Our Work
                        </button>
                        <button onClick={() => scrollTo("about")} className="text-sm font-medium hover:text-primary transition-colors">
                            About
                        </button>
                        <Button size="sm" onClick={() => scrollTo("contact")} variant="default">
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
                            <button onClick={() => scrollTo("home")} className="py-2 text-left font-medium hover:text-primary">
                                Home
                            </button>
                            <button onClick={() => scrollTo("services")} className="py-2 text-left font-medium hover:text-primary">
                                Services
                            </button>
                            <button onClick={() => scrollTo("work")} className="py-2 text-left font-medium hover:text-primary">
                                Our Work
                            </button>
                            <button onClick={() => scrollTo("about")} className="py-2 text-left font-medium hover:text-primary">
                                About
                            </button>
                            <Button className="mt-2 w-full" onClick={() => scrollTo("contact")} variant="default">Contact us</Button>
                        </div>
                    </div>
                )}
            </header>

            <main>
                {/* Hero */}
                <section id="home" className="relative isolate overflow-hidden pt-24 sm:pt-32 md:pt-40">
                    <div
                        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
                        aria-hidden="true"
                    >
                        <div
                            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary to-primary/70"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 md:grid-cols-1 md:px-6 md:py-16 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                                Industrial IoT, Web Apps & DevOps
                            </Badge>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                Build the Future, Today
                            </h1>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                                We help organizations modernize with custom software, from Industrial IoT to robust web applications.
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row justify-center">
                                <Button size="lg" onClick={() => scrollTo("contact")} variant="default">
                                    Get in touch
                                    <ArrowRight className="ml-2 size-4" />
                                </Button>
                                <Button size="lg" variant="outline" onClick={() => scrollTo("services")}>
                                    Explore services
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:py-24 md:px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">What we do</h2>
                        <p className="mt-3 text-muted-foreground md:text-lg">
                            We build custom software to solve your biggest challenges.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <Card className="h-full shadow-lg">
                                <CardHeader>
                                    <div className="mb-3 inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <CheckCircle2 className="size-6" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold">Web & Mobile Apps</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">Modern applications for web and mobile, built to scale.</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-primary" /> Full-stack development
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-primary" /> Geo-location and mapping
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-primary" /> Real-time data and APIs
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-primary" /> Legacy system modernization
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <Card className="h-full shadow-lg">
                                <CardHeader>
                                    <div className="mb-3 inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <CheckCircle2 className="size-6" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold">Industrial IoT</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">Connect your operations to the cloud for real-time insights.</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-primary" /> Process monitoring and control
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-primary" /> Edge computing and Digital Twins
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-primary" /> Predictive analytics and alerts
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-primary" /> Custom hardware and firmware
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <Card className="h-full shadow-lg">
                                <CardHeader>
                                    <div className="mb-3 inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <CheckCircle2 className="size-6" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold">Cloud & DevOps</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">Build, deploy, and scale your applications with confidence.</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-primary" /> Cloud architecture and migration
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-primary" /> CI/CD and automation
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-primary" /> Infrastructure as Code (IaC)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-primary" /> Security and compliance
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                {/* Our Work */}
                <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:py-24 md:px-6 border-t">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Our Work</h2>
                        <p className="mt-3 text-muted-foreground md:text-lg">
                            Explore how we've helped businesses like yours succeed.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <Card className="h-full shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">Smart Energy Management</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                <p>An Industrial IoT solution for real-time energy monitoring and optimization.</p>
                                <Button variant="link" className="px-0">Read case study</Button>
                            </CardContent>
                        </Card>
                        <Card className="h-full shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">Predictive Maintenance</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                <p>Using machine learning to predict equipment failure and reduce downtime.</p>
                                <Button variant="link" className="px-0">Read case study</Button>
                            </CardContent>
                        </Card>
                        <Card className="h-full shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">Cloud Migration</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                <p>Migrating a legacy enterprise application to a modern, scalable cloud architecture.</p>
                                <Button variant="link" className="px-0">Read case study</Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* About */}
                <section id="about" className="border-t bg-muted/30">
                    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 md:px-6 grid gap-12 md:grid-cols-2 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <h3 className="text-3xl font-bold sm:text-4xl">Decades of Innovation</h3>
                            <p className="text-muted-foreground text-lg">
                                We've been building the future since before the internet was a household name. Our journey has taken us from the early days of email to the cutting edge of Industrial IoT.
                            </p>
                            <ul className="mt-4 space-y-2 text-muted-foreground">
                                <li><strong>1993:</strong> First email exchange via UUCP/ERNET (IIT Kanpur)</li>
                                <li><strong>1995:</strong> Launched a free BBS and delivered our first commercial software</li>
                                <li><strong>2004:</strong> Engineered a custom internet gateway, firewall, and mail server</li>
                                <li><strong>2013:</strong> Deployed our first Industrial IoT solution for RPM logging</li>
                                <li><strong>2023:</strong> Launched next-gen IIoT Edge devices with cloud integration</li>
                            </ul>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-lg border p-4 text-center shadow-sm">
                                <div className="text-2xl font-bold">30+</div>
                                <div className="text-sm text-muted-foreground">Years of Experience</div>
                            </div>
                            <div className="rounded-lg border p-4 text-center shadow-sm">
                                <div className="text-2xl font-bold">50+</div>
                                <div className="text-sm text-muted-foreground">Years of Combined Experience</div>
                            </div>
                            <div className="rounded-lg border p-4 text-center shadow-sm">
                                <div className="text-2xl font-bold">100+</div>
                                <div className="text-sm text-muted-foreground">Projects Delivered</div>
                            </div>
                            <div className="rounded-lg border p-4 text-center shadow-sm">
                                <div className="text-2xl font-bold">20+</div>
                                <div className="text-sm text-muted-foreground">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-24 md:px-6">
                    <div className="grid gap-12 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <h3 className="text-3xl font-bold sm:text-4xl">Let's build something great together</h3>
                            <p className="text-muted-foreground text-lg">
                                Have a project in mind? We'd love to hear from you.
                            </p>
                            <div className="flex flex-col gap-4 text-lg">
                                <a href="tel:+919005670232" className="inline-flex items-center gap-3 hover:text-primary">
                                    <Phone className="size-5" /> +91-9005670232
                                </a>
                                <a href="mailto:info@mps.in" className="inline-flex items-center gap-3 hover:text-primary">
                                    <Mail className="size-5" /> info@mps.in
                                </a>
                                <div className="text-muted-foreground">
                                    254, Block H-1, Pandunagar, Kanpur 208005 (INDIA)
                                </div>
                            </div>
                        </motion.div>

                        <motion.form
                            ref={form}
                            onSubmit={onSubmit}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="space-y-6 rounded-xl border p-6 shadow-lg"
                        >
                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center h-full">
                                    <CheckCircle2 className="size-12 text-green-500" />
                                    <p className="mt-4 text-lg">Thanks! We'll be in touch soon.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="grid gap-2">
                                            <label className="text-sm font-medium" htmlFor="name">Name</label>
                                            <Input id="name" name="name" placeholder="Jane Doe" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <label className="text-sm font-medium" htmlFor="email">Email</label>
                                            <Input id="email" name="email" type="email" placeholder="jane@company.com" required />
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium" htmlFor="message">How can we help?</label>
                                        <Textarea id="message" name="message" placeholder="Tell us about your project..." rows={5} required />
                                    </div>
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="text-xs text-muted-foreground">We respect your privacy.</p>
                                        <Button type="submit" variant="default" disabled={isSubmitting}>
                                            {isSubmitting ? "Sending..." : "Send message"}
                                        </Button>
                                    </div>
                                </>
                            )}
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
                        <a href="#" className="hover:text-primary font-medium">Twitter</a>
                        <a href="#" className="hover:text-primary font-medium">LinkedIn</a>
                        <a href="#" className="hover:text-primary font-medium">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

