import Header from '@/pages/Header'
import NoteInput from '@/components/NoteInput'
import CardWrapper from '@/components/Card/CardWrapper'
import Footer from '@/pages/Footer'

function Home() {
  return (
    <>
      <Header />
      <NoteInput />
      <CardWrapper />
      <Footer />
    </>
  )
}

export default Home