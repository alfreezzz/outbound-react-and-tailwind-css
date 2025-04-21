import Header from '../components/Header'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Intersection observer to detect when the section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('gallery')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  // Gallery items data
  const galleryItems = [
    {
      id: 1,
      title: 'Rafting Adventure',
      description: 'Menaklukkan jeram sungai bersama tim',
      extension: 'jpeg',
      size: 'large', // large item spans 2 columns and rows
      delay: 0.1,
    },
    {
      id: 2,
      title: 'Team Building Game',
      description: 'Aktivitas yang memperkuat kerjasama tim',
      extension: 'png',
      size: 'small',
      delay: 0.2,
    },
    {
      id: 3,
      title: 'Senam',
      description: 'Aktivitas kebugaran tubuh',
      extension: 'jpeg',
      size: 'small',
      delay: 0.3,
    },
    {
      id: 4,
      title: 'Camping',
      description: 'Bermalam dengan suasana alam terbuka',
      extension: 'png',
      size: 'medium', // medium item spans 2 columns
      delay: 0.4,
    },
    {
      id: 5,
      title: 'Paintball Competition',
      description: 'Strategi dan kebersamaan dalam permainan seru',
      extension: 'jpeg',
      size: 'small',
      delay: 0.5,
    },
    {
      id: 6,
      title: 'Flying Fox Experience',
      description: 'Sensasi terbang melewati hutan',
      extension: 'jpeg',
      size: 'medium', // medium vertical item spans 2 rows
      orientation: 'vertical',
      delay: 0.6,
    },
    {
      id: 7,
      title: 'Mountain Hiking',
      description: 'Petualangan mendaki dengan pemandangan menakjubkan',
      extension: 'jpeg',
      size: 'small',
      delay: 0.7,
    },
    {
      id: 8,
      title: 'Training',
      description: 'Melatih kebersamaan tim',
      extension: 'jpeg',
      size: 'small',
      delay: 0.8,
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  // Function to determine CSS classes based on item size
  const getItemClasses = (size, orientation) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2'
      case 'medium':
        return orientation === 'vertical' ? 'md:row-span-2' : 'md:col-span-2'
      default:
        return ''
    }
  }

  return (
    <motion.section
      id='gallery'
      className='py-16 bg-gray-50 rounded-xl'
      initial='hidden'
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <motion.div className='mb-12 text-center' variants={itemVariants}>
          <Header title='Galeri Kegiatan'></Header>
          <div className='flex justify-center'>
            <div className='w-24 h-1 bg-primary rounded'></div>
          </div>
          <p className='mt-4 text-gray-700 max-w-2xl mx-auto'>
            Jelajahi berbagai kegiatan outdoor dan outbound yang kami tawarkan
            untuk pengalaman tim building yang tak terlupakan
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className={`relative overflow-hidden rounded-xl shadow-lg ${getItemClasses(
                item.size,
                item.orientation
              )}`}
              variants={itemVariants}
              custom={item.delay}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}${item.title}.${
                  item.extension
                }`}
                alt={item.title}
                className='w-full h-full object-cover transition-transform duration-700 hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white'>
                <h3 className='text-xl font-bold'>{item.title}</h3>
                <p className='text-sm text-gray-200 mt-2'>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='mt-12 text-center'
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a
            href='#contact'
            className='inline-block bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105 active:scale-95'
          >
            Jadwalkan Outbound Anda
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
