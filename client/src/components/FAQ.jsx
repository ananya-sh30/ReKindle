import { Disclosure } from '@headlessui/react'

const faqs = [
  {
    question: "What is ReKindle exactly?",
    answer: "ReKindle is a web platform that helps revive abandoned or incomplete projects using AI and collaborative tools. Think of it as a second chance hub for your unused ideas."
  },
  {
    question: "Is ReKindle free to use?",
    answer: "Yes, ReKindle currently leverages free tiers of AI tools and APIs, so you can explore its features without paying upfront."
  },
  {
    question: "How does AI matchmaking work?",
    answer: "We use sentence transformers and semantic search to recommend collaborators who resonate with your project’s concept or goals."
  },
  {
    question: "What if I want to keep my idea private?",
    answer: "We support restricted sharing and custom profile links with Supabase's Row Level Security (RLS), so your ideas stay private unless you choose otherwise."
  },
  {
    question: "Can I use ReKindle for non-technical ideas?",
    answer: "Absolutely. ReKindle supports everything from half-written novels to dead startup concepts. The platform is built for creative and technical projects alike."
  },
  {
    question: "What types of files or inputs can I submit?",
    answer: "From rough text notes to UI screenshots and voice memos—ReKindle can process them all using multimodal AI tools."
  },
  {
    question: "Do I retain ownership of my idea?",
    answer: "Yes, 100%. You retain full authorship and control over your ideas, even if collaborators are involved."
  },
  {
    question: "How is project progress tracked?",
    answer: "Our dashboard provides AI-generated health metrics, milestones, and insights so you can monitor your revival journey."
  },
  {
    question: "Can I get feedback before fully reviving my project?",
    answer: "Yes. ReKindle provides early pitch builders, input analyzers, and AI commentary before you commit to revival."
  },
  {
    question: "Is there any reward system?",
    answer: "Yes! ReKindle offers badges and AI milestones as you progress and collaborate, turning your revival into a journey."
  }
];

const PlusMinusIcon = ({ open }) => (
  <span className="text-2xl font-bold text-gray-500">
    {open ? '−' : '+'}
  </span>
);

export default function FAQSection() {
  return (

    <div className="w-full px-4 py-16  faq-section">
      <div className="mx-auto w-full max-w-7xl p-6 rounded-xl  ">
      
        <h2 className="text-4xl font-semibold text-center  text-gray-800 mt-8">
          Frequently Asked Questions (FAQ)

        </h2>
        <h2
                className=" text-center font-semibold mt-3"
                style={{ color: 'rgba(23, 92, 165, 0.97)', fontSize: '18px' }}
              >
               Clear answers to guide you every step of the way.


              </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="rounded-md shadow-sm">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center bg-white px-6 py-5 text-left text-lg font-semibold text-gray-800 hover:bg-gray-50 transition rounded-md">
                    <span>{faq.question}</span>
                    <PlusMinusIcon open={open} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pt-3 pb-4 text-base text-gray-600 bg-white border-t border-gray-200 rounded-b-md font-semibold">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  )
}
