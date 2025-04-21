export default function Header({ title }) {
  return (
    <h1 className='text-center text-primary font-serif lg:text-5xl md:text-5xl mobile-l:text-4xl text-3xl font-bold'>
      {title}
    </h1>
  )
}
