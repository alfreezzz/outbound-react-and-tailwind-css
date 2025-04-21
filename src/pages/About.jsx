import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simple intersection observer to detect when the section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('about')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  // Variants for different animation elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      id='about'
      className='flex max-md:flex-col md:p-8 gap-8 justify-between bg-white rounded-2xl'
      initial='hidden'
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.div
        className='bg-gray-100 md:p-8 p-4 my-auto rounded-xl border-t-4 border-gray-200 w-full'
        variants={itemVariants}
      >
        <h1 className='text-center lg:mb-12 mb-6 text-primary font-serif lg:text-4xl md:text-3xl mobile-l:text-4xl text-3xl font-bold'>
          Tentang Kami
        </h1>
        <motion.div
          className='p-4 bg-white rounded-lg h-auto border-l-4 border-primary'
          variants={itemVariants}
        >
          <div className='flex items-center mb-6'>
            <img src='./icon.png' alt='icon' className='w-12 h-12 mr-3' />
            <p className='lg:text-xl text-lg'>
              <span className='italic font-medium'>Wanna</span> Outbound
            </p>
          </div>
          <p className='leading-relaxed text-base'>
            Kami adalah sebuah tim yang terdiri dari pecinta alam dan petualang
            yang berdedikasi untuk membawa semangat petualangan kepada
            masyarakat.
            <br />
            Didirikan pada tahun 2024, kami telah memimpin berbagai macam
            kegiatan outbond di lokasi-lokasi eksotis dan menarik di seluruh
            wilayah Puncak.
          </p>
        </motion.div>
      </motion.div>
      <motion.div className='md:p-8 p-4 w-full' variants={itemVariants}>
        <motion.img
          src='../../public/1.png'
          alt='Outbound'
          className='rounded-xl rounded-tr-none justify-end border-b-4 border-r-4 border-primary h-full object-cover object-bottom-right'
          whileInView={{
            scale: [0.95, 1],
            transition: { duration: 0.5 },
          }}
        />
        <motion.a
          href='#'
          className='relative rounded-full z-49 pointer-events-auto md:right-12 right-6 bottom-6 text-white font-medium md:text-lg text-sm inline-block items-center bg-[#25D366] px-5 py-2 hover:brightness-90 transition active:border'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className='flex items-center'>
            <svg
              className='fill-white w-6 h-6 mr-2'
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>WhatsApp</title>
              <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
            </svg>
            Hubungi Kami
          </span>
        </motion.a>
      </motion.div>
    </motion.section>
  )
}
