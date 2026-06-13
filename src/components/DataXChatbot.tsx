'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, MessageCircle, Send, X } from 'lucide-react'

interface ChatMessage {
  role: 'bot' | 'user'
  text: string
}

const whatsappNumber = '923135506623'

const quickQuestions = [
  'What services do you provide?',
  'Do you build websites?',
  'Do you make mobile apps?',
  'Can you build AI automation?',
  'Where is your office?',
  'How can I contact DataX?',
]

const answers = [
  {
    keywords: ['service', 'services', 'provide', 'offer'],
    answer:
      'DataX Technologies provides web development, mobile app development, AI integration, business automation, data science, analytics, cybersecurity, DevOps, cloud deployment, UI/UX design, SEO, and digital marketing.',
  },
  {
    keywords: ['website', 'web', 'react', 'next', 'frontend', 'backend'],
    answer:
      'Yes. We build modern responsive websites and scalable web applications using React.js, Next.js, Node.js, APIs, databases, clean UI, SEO structure, and secure deployment practices.',
  },
  {
    keywords: ['mobile', 'app', 'android', 'ios', 'flutter', 'react native'],
    answer:
      'Yes. We develop Android and iOS mobile apps using Flutter, React Native, Firebase, APIs, analytics, and polished user experiences.',
  },
  {
    keywords: ['ai', 'automation', 'chatbot', 'machine learning', 'workflow'],
    answer:
      'Yes. We build AI integrations, machine learning models, chatbots, predictive analytics, workflow automation, and business automation systems that save time and improve decisions.',
  },
  {
    keywords: ['location', 'office', 'address', 'islamabad', 'blue area'],
    answer:
      'Our office is Office 11, Aaly Plaza, 2nd Floor, Blue Area, Islamabad 44000, Pakistan.',
  },
  {
    keywords: ['contact', 'email', 'whatsapp', 'phone', 'number'],
    answer:
      'You can contact DataX Technologies by email at datax.sol@gmail.com, visit www.datax.pk, or message us on WhatsApp at 03135506623.',
  },
  {
    keywords: ['price', 'cost', 'quote', 'budget'],
    answer:
      'Pricing depends on scope, timeline, and features. Share your requirements on WhatsApp and our team can guide you with a practical estimate.',
  },
  {
    keywords: ['seo', 'marketing', 'digital'],
    answer:
      'Yes. We provide SEO, social media marketing, content strategy, technical SEO, and digital growth support for businesses that want stronger online visibility.',
  },
]

function findAnswer(input: string) {
  const normalized = input.toLowerCase()
  return (
    answers.find((item) => item.keywords.some((keyword) => normalized.includes(keyword)))?.answer ||
    'Thanks for asking. DataX Technologies can help with software development, AI, automation, cloud, cybersecurity, UI/UX, SEO, and digital marketing. For a direct answer, send your details on WhatsApp and our team will respond.'
  )
}

export default function DataXChatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'bot',
      text: 'Hi, I am the DataX assistant. Ask me about our services, location, website development, mobile apps, AI automation, pricing, or contact details.',
    },
  ])

  const whatsappText = useMemo(
    () => encodeURIComponent('Hello DataX Technologies, I came from the website and want to discuss a project.'),
    []
  )

  function ask(question: string) {
    setMessages((current) => [...current, { role: 'user', text: question }, { role: 'bot', text: findAnswer(question) }])
  }

  function submit() {
    const value = input.trim()
    if (!value) return
    ask(value)
    setInput('')
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            className="w-[min(92vw,380px)] overflow-hidden rounded-2xl border border-[var(--color-mas-cyan)]/25 bg-[var(--color-mas-bg)]/96 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-[var(--color-mas-border)] px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-mas-cyan)]/12 text-[var(--color-mas-cyan)]">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-white">DataX Assistant</h3>
                  <p className="text-xs text-[var(--color-mas-text-muted)]">Online support via WhatsApp</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-lg p-2 text-[var(--color-mas-text-muted)] hover:bg-white/[0.04] hover:text-white" aria-label="Close chatbot">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[360px] space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'bg-[var(--color-mas-cyan)] text-[var(--color-mas-bg)]'
                        : 'border border-white/10 bg-white/[0.04] text-[var(--color-mas-text-secondary)]'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--color-mas-border)] px-4 py-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => ask(question)}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-[var(--color-mas-text-secondary)] hover:border-[var(--color-mas-cyan)]/35 hover:text-white"
                  >
                    {question}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') submit()
                  }}
                  className="min-w-0 flex-1 rounded-xl border border-[var(--color-mas-border)] bg-white/[0.04] px-3 py-2 text-sm text-white outline-none focus:border-[var(--color-mas-cyan)]/50"
                  placeholder="Ask a question..."
                />
                <button onClick={submit} className="rounded-xl bg-[var(--color-mas-cyan)] px-3 text-[var(--color-mas-bg)]" aria-label="Send chat message">
                  <Send className="h-4 w-4" />
                </button>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-black"
              >
                <MessageCircle className="h-4 w-4" />
                Continue on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_12px_35px_rgba(37,211,102,0.35)] transition-transform hover:scale-105"
        aria-label="Chat with DataX on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <button
        onClick={() => setOpen((value) => !value)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-mas-cyan)]/35 bg-[var(--color-mas-bg)] text-[var(--color-mas-cyan)] shadow-[0_12px_35px_rgba(0,200,255,0.2)] transition-transform hover:scale-105"
        aria-label="Open DataX chatbot"
      >
        <Bot className="h-6 w-6" />
      </button>
    </div>
  )
}
