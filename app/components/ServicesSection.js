import { Eye, View, Microscope, Stethoscope, SmileIcon as Tooth } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import EyeServiceItem from '@/app/components/EyeServiceItem'

const services = [
  {
    icon: Eye,
    title: 'EYECARE',
    points: [
      'The Pioneers of Ophthalmology in Pakistan',
      'The Most Well-Equipped',
      'A Full Scope of Eyecare',
      'Ophthalmic Leaders with Global Expertise'
    ]
  },
  {
    icon: Microscope,
    title: 'LABORATORY',
    points: [
      "Pakistan's Leading Edge in Diagnostic Care",
      '1000+ Innovative Test Solutions & Rapid Results',
      '20+ Collection Points',
      'Functions 24/7',
      'Home Healthcare Services'
    ]
  },
  {
    icon: Stethoscope,
    title: 'GENERAL',
    points: [
      '100+ Bedded Tertiary Care',
      '25+ Distinctive Modalities',
      'Specialized Medical Experts',
      'Modern Intensive Care Units',
      '24/7 Emergency Services',
      '24/7 Pharmacy'
    ]
  },
  {
    icon: Tooth,
    title: 'DENTAL CARE & AESTHETICS',
    points: [
      'State-Of-The-Art Tools & Equipment',
      'Highest Levels of Sterilization',
      'Modern Ambience',
      'Certified Dentists & Aestheticians'
    ]
  }
]

export default function ServicesSection() {
  return (
    <>
    <section className="py-16 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-8 md:px-14">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00563B] mb-4">
            4 DECADES OF HEALTHCARE EXPERTISE
          </h2>
          <p className="text-lg md:text-xl text-[#00563B]">
            THE PIONEERS IN INTRODUCING THE LATEST OPHTHALMIC ADVANCEMENTS IN PAKISTAN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white rounded-lg hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#8dc63f] flex items-center justify-center mb-4">
                    <service.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-[SairaSemibold] text-[#00563B] mb-4 text-center">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2 text-[#8dc63f]">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="text-center mt-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[#00563B]">
            7+ LOCATIONS ACROSS PAKISTAN
          </h3>
        </div>
      </div>
    </section>
    <div className='w-full overflow-x-auto'>
      <div className='flex flex-col md:flex-row justify-center items-center uppercase min-w-max sm:min-w-0'>
        <EyeServiceItem icon={Eye} title="Refractive Procedure" />
        <EyeServiceItem icon={View} title="Cornea Procedure" />
        <EyeServiceItem icon={Eye} title="Retinal Services" />
        <EyeServiceItem icon={View} title="Oculoplastics" />
        <EyeServiceItem icon={Eye} title="Glaucoma Procedure" />
      </div>
    </div>
    </>
  )
}