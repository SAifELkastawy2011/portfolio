'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.text === "OK") {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "saif.elkastawy2011@gmail.com",
      href: "mailto:saif.elkastawy2011@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+201015481533",
      href: "tel:+201015481533",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              Get In Touch
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800"
          >
            <h2 className="text-2xl font-semibold mb-6 text-neutral-200">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800">
              <h2 className="text-2xl font-semibold mb-6 text-neutral-200">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-black/50 border border-neutral-800 hover:border-blue-500/50 transition-all duration-300 group w-full"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-pink-500/20 flex items-center justify-center text-xl text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0">
                      <info.icon />
                    </div>
                    <div className="flex-1 min-w-[120px]">
                      <p className="text-sm text-neutral-500">{info.label}</p>
                      <p className="text-neutral-300 group-hover:text-white transition-colors break-all md:break-normal">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800">
              <h2 className="text-xl font-semibold mb-4 text-neutral-200">Response Time</h2>
              <p className="text-neutral-400">
                I typically respond within 24 hours. Feel free to reach out anytime!
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Available for freelance work
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}