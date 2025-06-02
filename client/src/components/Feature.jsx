import {
  SparklesIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'AI-Powered Project Revival',
    description:
      'Generate alternate success paths and pivot strategies to breathe new life into your abandoned ideas.',
    icon: SparklesIcon,
  },
  {
    name: 'Secure Collaboration',
    description:
      'Share your projects privately or publicly with controlled access, ensuring your ideas stay safe.',
    icon: ShieldCheckIcon,
  },
 
  {
    name: 'Smart AI Matchmaking',
    description:
      'Find the perfect collaborators based on semantic similarity and project goals to boost creativity.',
    icon: UserGroupIcon,
  },
]

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-6 feature-section">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2
                className="text-base font-semibold"
                style={{ color: 'rgba(23, 92, 165, 0.97)', fontSize: '20px' }}
              >
                Revive faster
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Tools to <span className="logo-blue ">{'{Re}'}</span>imagine and <br/><span className="logo-blue">{'{Re}'}</span>build your Ideas
              </p>
              <p className="mt-6 text-xl leading-relaxed text-gray-700 feature-text">
                Unlock the full potential of your dormant projects with intelligent tools designed to accelerate revival, secure collaboration, and seamless progress tracking.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-lg leading-8 text-gray-700 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-7">
                    <dt className="inline font-semibold feature-text-head">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-0 h-6 w-6 feature-text-head" 
                      />
                      {feature.name}&nbsp;
                    </dt>{' '}
                    <dd className="inline feature-text">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[38rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[56rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
