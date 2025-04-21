import { useState, useEffect } from 'react'
import BlurText from '../components/BlurText'
import RotatingText from '../components/RotatingText'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleAnimationComplete = () => {
    console.log('Animation completed!')
  }

  return (
    <section id='home' className='relative h-screen overflow-hidden'>
      <div className='absolute inset-0 w-full h-full z-[-1]'>
        <div className='relative w-full h-full'>
          <img
            src={`${import.meta.env.BASE_URL}bg.jpg`}
            className={`w-full h-full object-cover object-center transition-transform duration-1000 ${
              isLoaded ? 'scale-105' : 'scale-100'
            }`}
            alt='Background'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80'></div>
        </div>
      </div>

      <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8'>
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <header className='text-center'>
            <div className='mb-2 text-tertiary text-sm md:text-base uppercase tracking-widest font-medium'>
              Selamat Datang di
            </div>
            <BlurText
              text='Wanna Outbound'
              delay={150}
              animateBy='words'
              direction='top'
              onAnimationComplete={handleAnimationComplete}
              className='xl:text-9xl lg:text-8xl md:text-7xl mobile-l:text-5xl text-4xl text-white font-bold tracking-tight drop-shadow-lg'
            />
          </header>

          <div className='mt-4 mb-8'>
            <RotatingText
              texts={[
                'Outbound',
                'Camping',
                'Flying Fox',
                'Hiking',
                'Paint Ball',
                'Rafting',
                'Training',
              ]}
              mainClassName='px-2 sm:px-2 md:px-3 text-tertiary tracking-wide xl:text-7xl lg:text-6xl md:text-5xl mobile-l:text-4xl text-3xl font-bold py-0.5 sm:py-1 md:py-2 justify-center rounded-lg'
              staggerFrom={'last'}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          <div className='flex flex-wrap gap-4 justify-center mt-6 md:mt-8'>
            <a
              href='#package'
              className='px-5 py-2 mobile-m:text-sm text-xs lg:text-base bg-tertiary text-black rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg transform hover:-translate-y-1'
            >
              Eksplor paketan
            </a>
            <a
              href='#contact'
              className='px-5 py-2 mobile-m:text-sm text-xs lg:text-base bg-transparent border-2 border-tertiary text-white rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg transform hover:-translate-y-1'
            >
              Hubungi kami
            </a>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent'></div>
    </section>
  )
}
