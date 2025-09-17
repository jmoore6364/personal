"use client";

import { generateResumePDF } from '@/utils/generatePDF';

export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Let&apos;s Connect
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Interested in discussing engineering leadership, cloud architecture, or AI/ML innovations?
          I&apos;m always open to connecting with fellow technologists and exploring new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <span className="text-slate-600 dark:text-slate-400 mr-3">📧</span>
                <a
                  href="mailto:jasonwamoore@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  jasonwamoore@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-slate-600 dark:text-slate-400 mr-3">📞</span>
                <a
                  href="tel:+19253219772"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  (925) 321-9772
                </a>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-slate-600 dark:text-slate-400 mr-3">💼</span>
                <a
                  href="https://www.linkedin.com/in/jmoore-engineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-slate-600 dark:text-slate-400 mr-3">📄</span>
                <button
                  onClick={generateResumePDF}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Download Resume (PDF)
                </button>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Areas of Interest
            </h3>
            <ul className="text-slate-600 dark:text-slate-400 space-y-2 text-left">
              <li>• Engineering Leadership & Team Building</li>
              <li>• Cloud-Native Architecture (Azure/AWS)</li>
              <li>• AI/ML Implementation & Strategy</li>
              <li>• SaaS Platform Scaling</li>
              <li>• DevOps & CI/CD Optimization</li>
              <li>• Technical Mentoring & Coaching</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Currently Exploring
          </h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Actively studying ML, LLMs, and AI programming using Python, PyTorch, Hugging Face,
            LangChain, and cloud ML platforms. Always interested in discussing emerging technologies
            and their practical applications in enterprise environments.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Python", "PyTorch", "RAG", "Prompt Engineering", "Azure AI", "OpenAI", "LangChain"].map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}