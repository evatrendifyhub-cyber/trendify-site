"use client"

import { useState } from "react";
import { MessageCircle, Send, Mail, User, FileText, CheckCircle } from "lucide-react";

export default function CommentInquiriesPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const inquiryTypes = [
        { value: "", label: "Select inquiry type" },
        { value: "product-question", label: "Product Question" },
        { value: "order-inquiry", label: "Order Inquiry" },
        { value: "suggestion", label: "Suggestion" },
        { value: "feedback", label: "Feedback" },
        { value: "partnership", label: "Partnership Opportunity" },
        { value: "other", label: "Other" }
    ];

    return (
        <div className="min-h-screen py-12 md:py-20">
            <div className="container px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                            <MessageCircle className="w-4 h-4 text-violet-400" />
                            <span className="text-sm font-medium text-violet-300">Get in Touch</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                            Send Us Your <span className="gradient-text">Inquiries</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Have a question, suggestion, or feedback? We&apos;d love to hear from you. 
                            Fill out the form below and we&apos;ll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {/* Contact Info Sidebar */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="bg-card border border-border/50 rounded-xl p-6">
                                <h3 className="text-lg font-semibold mb-4">Quick Info</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                                            <Mail className="w-5 h-5 text-violet-400" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">Email Us</p>
                                            <p className="text-sm text-muted-foreground">support@evatrendifyhub.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center shrink-0">
                                            <MessageCircle className="w-5 h-5 text-pink-400" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">Response Time</p>
                                            <p className="text-sm text-muted-foreground">Within 24-48 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/20 rounded-xl p-6">
                                <h3 className="text-lg font-semibold mb-2">Common Inquiries</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                                        Product availability questions
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                                        Pricing and discount inquiries
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                                        Partnership opportunities
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                                        Website feedback and suggestions
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                                        New product recommendations
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="md:col-span-3">
                            <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8">
                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-green-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                        <p className="text-muted-foreground mb-6">
                                            Your inquiry has been submitted successfully. We&apos;ll get back to you within 24-48 hours.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setIsSubmitted(false);
                                                setFormData({ name: "", email: "", subject: "", message: "" });
                                            }}
                                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl"
                                        >
                                            Send Another Inquiry
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                                                    <User className="w-4 h-4 text-muted-foreground" />
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-muted/50 border border-border/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                                                    <Mail className="w-4 h-4 text-muted-foreground" />
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-muted/50 border border-border/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
                                                <FileText className="w-4 h-4 text-muted-foreground" />
                                                Inquiry Type
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-muted/50 border border-border/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                            >
                                                {inquiryTypes.map((type) => (
                                                    <option key={type.value} value={type.value}>
                                                        {type.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                                                <MessageCircle className="w-4 h-4 text-muted-foreground" />
                                                Your Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full bg-muted/50 border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                                                placeholder="Tell us about your inquiry, question, or feedback..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4" />
                                                    Submit Inquiry
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
