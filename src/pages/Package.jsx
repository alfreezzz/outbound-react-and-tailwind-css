import Header from '../components/Header'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Packages() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('team')

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

    const section = document.getElementById('package')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  // Package data
  const packages = {
    team: [
      {
        title: 'Basic Team Building',
        price: '899K',
        priceDetail: 'per tim (min. 10 orang)',
        description:
          'Paket dasar untuk membangun kerjasama tim dan komunikasi yang lebih baik',
        features: [
          'Kegiatan ice breaking',
          '2 permainan tim pilihan',
          'Fasilitator berpengalaman',
          'Sertifikat partisipasi',
          'Dokumentasi foto kegiatan',
          'Durasi: 1 hari (6 jam)',
        ],
        highlight: false,
      },
      {
        title: 'Premium Team Building',
        price: '1.599K',
        priceDetail: 'per tim (min. 10 orang)',
        description:
          'Pengalaman lengkap untuk meningkatkan kohesi dan produktivitas tim',
        features: [
          'Semua fitur Basic Team Building',
          '4 permainan tim pilihan',
          'Aktivitas high ropes',
          'Makan siang dan snack',
          'Video dokumentasi',
          'Analisis kinerja tim',
          'Durasi: 1 hari penuh (8 jam)',
        ],
        highlight: true,
      },
      {
        title: 'Executive Team Retreat',
        price: '2.499K',
        priceDetail: 'per tim (min. 8 orang)',
        description:
          'Paket eksklusif untuk tim eksekutif dengan fasilitas premium',
        features: [
          'Semua fitur Premium Team Building',
          'Akomodasi resort (1 malam)',
          'Dinner & breakfast',
          'Sesi reflection & planning',
          'Fasilitator senior khusus',
          'Transfer dari/ke lokasi',
          'Durasi: 2 hari 1 malam',
        ],
        highlight: false,
      },
    ],
    school: [
      {
        title: 'Paket Sekolah Dasar',
        price: '699K',
        priceDetail: 'per kelas (min. 20 siswa)',
        description: 'Aktivitas seru dan edukatif untuk siswa sekolah dasar',
        features: [
          'Games edukatif menyenangkan',
          'Aktivitas kreativitas alam',
          'Pengawasan ketat & aman',
          '2 fasilitator per kelompok',
          'Sertifikat partisipasi',
          'Snack dan makan siang',
          'Durasi: 1 hari (5 jam)',
        ],
        highlight: false,
      },
      {
        title: 'Paket Sekolah Menengah',
        price: '899K',
        priceDetail: 'per kelas (min. 20 siswa)',
        description:
          'Program khusus untuk remaja dengan kombinasi petualangan dan pembelajaran',
        features: [
          'Tantangan pemecahan masalah',
          'Low & medium ropes course',
          'Aktivitas survival dasar',
          'Fasilitator berpengalaman',
          'Makan siang dan snack',
          'Dokumentasi kegiatan',
          'Durasi: 1 hari (6 jam)',
        ],
        highlight: true,
      },
      {
        title: 'School Camp Adventure',
        price: '1.899K',
        priceDetail: 'per siswa (min. 30 siswa)',
        description: 'Pengalaman camping dengan aktivitas outbound lengkap',
        features: [
          'Program 2 hari 1 malam',
          'Penyediaan tenda & peralatan',
          'Semua makanan termasuk',
          'Aktivitas malam & api unggun',
          'Hiking & eksplorasi alam',
          'Tim keamanan 24 jam',
          'Sertifikat & merchandise',
        ],
        highlight: false,
      },
    ],
    family: [
      {
        title: 'Fun Family Day',
        price: '799K',
        priceDetail: 'per keluarga (max. 5 orang)',
        description: 'Waktu berkualitas bersama keluarga dengan aktivitas seru',
        features: [
          'Games keluarga seru',
          'Area piknik eksklusif',
          'Pemandu kegiatan ramah',
          'Makan siang & snack keluarga',
          'Dokumentasi foto keluarga',
          'Durasi: 1 hari (6 jam)',
        ],
        highlight: false,
      },
      {
        title: 'Adventure Family Package',
        price: '1.299K',
        priceDetail: 'per keluarga (max. 5 orang)',
        description: 'Petualangan seru untuk seluruh anggota keluarga',
        features: [
          'Semua fitur Fun Family Day',
          'Flying fox untuk semua usia',
          'Aktivitas air menyenangkan',
          'Treasure hunt keluarga',
          'Souvenir keluarga',
          'Sesi foto profesional',
          'Durasi: 1 hari penuh (8 jam)',
        ],
        highlight: true,
      },
      {
        title: 'Family Weekend Retreat',
        price: '2.299K',
        priceDetail: 'per keluarga (max. 5 orang)',
        description:
          'Akhir pekan penuh keseruan dengan menginap di alam terbuka',
        features: [
          'Program 2 hari 1 malam',
          'Akomodasi glamping',
          'Semua makanan termasuk',
          'Aktivitas outbound lengkap',
          'Api unggun & storytelling',
          'Kegiatan berkebun organik',
          'Album foto digital',
        ],
        highlight: false,
      },
    ],
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const tabVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      id='package'
      className='py-16 bg-gray-50 rounded-xl'
      initial='hidden'
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <motion.div className='mb-12 text-center' variants={itemVariants}>
          <Header title='Paket Outbound'></Header>
          <div className='flex justify-center'>
            <div className='w-24 h-1 bg-primary rounded'></div>
          </div>
          <p className='mt-4 text-gray-700 max-w-2xl mx-auto'>
            Kami menawarkan berbagai paket outbound yang dapat disesuaikan
            dengan kebutuhan dan anggaran Anda
          </p>
        </motion.div>

        <motion.div
          className='flex justify-center mb-10'
          variants={tabVariants}
        >
          <div className='bg-white rounded-full p-1 shadow-md flex'>
            {[
              { id: 'team', label: 'Tim & Korporat' },
              { id: 'school', label: 'Sekolah' },
              { id: 'family', label: 'Keluarga' },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-2 cursor-pointer rounded-full font-medium text-sm md:text-base transition-all ${
                  selectedPackage === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedPackage(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {packages[selectedPackage].map((pkg, index) => (
            <motion.div
              key={pkg.title}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                pkg.highlight ? 'border-2 border-primary relative' : ''
              }`}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {pkg.highlight && (
                <div className='absolute top-0 right-0 bg-primary text-white py-1 px-4 rounded-bl-lg font-medium text-sm'>
                  Paling Populer
                </div>
              )}
              <div className={`p-8 ${pkg.highlight ? 'bg-primary/5' : ''}`}>
                <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                  {pkg.title}
                </h3>
                <div className='flex items-end mb-4'>
                  <span className='text-primary text-4xl font-bold'>
                    Rp {pkg.price}
                  </span>
                  <span className='text-gray-500 ml-1'>/{pkg.priceDetail}</span>
                </div>
                <p className='text-gray-600 mb-6'>{pkg.description}</p>

                <div className='space-y-3 mb-8'>
                  {pkg.features.map((feature, i) => (
                    <div key={i} className='flex items-start'>
                      <svg
                        className='w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className='text-gray-700'>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    pkg.highlight
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-white border-2 border-primary text-primary hover:bg-primary/5'
                  }`}
                >
                  Booking Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className='mt-16 text-center' variants={itemVariants}>
          <h3 className='text-2xl font-bold text-gray-800 mb-4'>
            Butuh Paket yang Disesuaikan?
          </h3>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            Kami dapat membuat program khusus sesuai dengan kebutuhan spesifik
            perusahaan, sekolah, atau keluarga Anda
          </p>
          <a
            href='#contact'
            className='inline-block bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105 active:scale-95'
          >
            Konsultasikan Kebutuhan Anda
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
