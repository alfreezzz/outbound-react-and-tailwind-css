import Header from '../components/Header'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Contact() {
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

    const section = document.getElementById('contact')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      id='contact'
      className='py-12 bg-gray-50 rounded-xl'
      initial='hidden'
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <motion.div className='mb-12' variants={itemVariants}>
          <Header title='Hubungi Kami'></Header>
          <motion.div
            className='flex justify-center mt-4'
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: {
                width: 'auto',
                opacity: 1,
                transition: { duration: 0.8, delay: 0.3 },
              },
            }}
          >
            <div className='w-20 h-1 bg-primary rounded'></div>
          </motion.div>
          <h2 className='text-center text-gray-700 font-medium tracking-wide mt-4'>
            Silakan hubungi kami untuk informasi lebih lanjut tentang paket
            outbound
          </h2>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-8 items-center'>
          <motion.div
            className='lg:col-span-1 max-mobile-m:max-w-64'
            variants={cardVariants}
          >
            <div className='bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105'>
              <motion.div
                className='bg-primary text-white p-6'
                initial={{ opacity: 0, y: -20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                }
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className='text-2xl font-bold mb-2'>Informasi Kontak</h3>
                <p className='opacity-80'>Kami siap melayani pertanyaan Anda</p>
              </motion.div>

              <div className='p-6 space-y-6'>
                {[
                  {
                    title: 'Alamat',
                    content: 'Jl. Absurd No. 7, Depok',
                    icon: (
                      <svg
                        className='w-6 h-6 fill-primary'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z' />
                      </svg>
                    ),
                  },
                  {
                    title: 'Telepon',
                    content: '0888-1123-7253',
                    icon: (
                      <svg
                        className='w-6 h-6 fill-primary'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z' />
                      </svg>
                    ),
                  },
                  {
                    title: 'Email',
                    content: 'wannaoutbound@gmail.com',
                    icon: (
                      <svg
                        className='w-6 h-6 fill-primary'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z' />
                      </svg>
                    ),
                  },
                  {
                    title: 'Jam Operasional',
                    content: [
                      'Senin - Jumat: 08.00 - 17.00',
                      'Sabtu - Minggu: 09.00 - 15.00',
                    ],
                    icon: (
                      <svg
                        className='w-6 h-6 fill-primary'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 -960 960 960'
                      >
                        <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-40 120v-160h80v160h-80Zm-40-280h160v80H400v-80Z' />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className='flex items-start'
                    initial={{ x: -30, opacity: 0 }}
                    animate={
                      isVisible ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }
                    }
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                  >
                    <div className='bg-primary/10 p-3 rounded-full mr-4'>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className='font-bold text-gray-800'>{item.title}</h4>
                      {Array.isArray(item.content) ? (
                        item.content.map((line, i) => (
                          <p key={i} className='text-gray-600 mt-1'>
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className='text-gray-600 mt-1'>{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className='lg:col-span-2' variants={cardVariants}>
            <div className='bg-white shadow-lg rounded-2xl overflow-hidden p-2 transition-transform duration-300 hover:shadow-xl hover:scale-105'>
              <h3 className='text-2xl text-primary font-bold mb-2 p-6'>
                Lokasi Kami
              </h3>
              <motion.iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5607.338217131391!2d106.83131607775115!3d-6.395692078327391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec0fabfa32f7%3A0x1d5da760444ffd74!2sDepok%20Town%20Square%2C%20Jl.%20Margonda%20No.1%2C%20Kemiri%20Muka%2C%20Kecamatan%20Beji%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016424!5e0!3m2!1sid!2sid!4v1745145154473!5m2!1sid!2sid'
                className='w-full h-96 rounded-xl'
                title='Lokasi Wanna Outbound di Google Maps'
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
              ></motion.iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
