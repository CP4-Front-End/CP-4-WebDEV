import Header from '../components/Header'
import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Mensal',
    id: 'tier-hobby',
    href: '/',
    priceMonthly: 'R$119,00',
    description: "O plano perfeito para quem quer testar nossa experiência por um mês",
    features: ['+100 unidades', 'Avaliações físicas', 'Personais a disposição', '7 dias por semana'],
    featured: false,
  },
  {
    name: 'Anual',
    id: 'tier-enterprise',
    href: '/',
    priceMonthly: 'R$99,00',
    description: 'Plano perfeito para quem tem certeza da sua escolha!',
    features: [
      '24h',
      '+100 unidades',
      '7 dias por semana',
      'Avaliações físicas',
      'Aulas de zumba e luta',
      'Personais exclusivos para você',
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
    <Header/>
    <div className="relative isolate bg-[#D9D9D9] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-[#03A63C]">Planos</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-[#84D904] sm:text-6xl">
          Escolha o melhor plano para você
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-[#261008] sm:text-xl/8">
        Escolha entre o plano mensal e anual, mantenha-se em movimento!
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-[#84D904]' : 'bg-white/2.5 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-[#03A63C] sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-[#261008]' : 'text-[#03A63C]', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-white',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-white' : 'text-white', 'text-base')}>12x/Mês</span>
            </p>
            <p className={classNames(tier.featured ? 'text-white' : 'text-white', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-white' : 'text-white',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-[#261008]' : 'text-[#261008]', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-[#03A63C] text-white hover:bg-[#0e6d2f] transition duration-300 focus-visible:outline-indigo-500'
                  : 'bg-white/10 text-[#261008] inset-ring inset-ring-white/5 hover:bg-[#03A63C] transition duration-200 focus-visible:outline-[#F2E205]',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Escolher plano 
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}