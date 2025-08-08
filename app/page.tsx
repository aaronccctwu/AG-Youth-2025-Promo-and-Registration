'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { ArrowRight, ShoppingBag, ChevronRight } from "lucide-react"
import { Countdown } from "../components/countdown"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1 pt-16"></main>
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/hero-bg.jpg"
              alt="Youth Conference Worship"
              fill
              className="object-cover"
              style={{ 
                opacity: 0.8,
                filter: 'brightness(1.5)'
              }}
              priority
              quality={100}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          <div className="relative container flex flex-col items-start justify-center min-h-[90vh] px-4 py-16">
            <div className="max-w-3xl text-left -mt-20">
              <div className="inline-block px-4 py-1 mb-4 border border-yellow-500 text-yellow-500 text-sm font-medium">
                05-07 SEPT, 2025 • CALVARY CITY CHURCH TAWAU
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-tight">
                KINGDOM
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
                  AWAKENING
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
                Awaken your purpose. Equip your passion. 
                Join a movement that's reclaiming culture for Christ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeGsQl7_A59fhdhmFeVadm8YKwv7PHPGTiAMyBn0byqu70ljw/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold hover:from-yellow-600 hover:to-red-600 h-14 px-8 text-lg -mt-2"
                  >
                    DAFTER SEKARANG
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        {/* Countdown Section */}
        <section className="bg-gradient-to-r from-yellow-900/20 to-red-900/20 py-10">
          <div className="container">
            <Countdown />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block px-4 py-1 mb-4 border border-yellow-500 text-yellow-500 text-sm font-medium">
                  MENGENAI KONFERENS INI
                </div>
                <h2 className="text-4xl font-bold tracking-tight mb-6">
                  Bangkitkan Panggilanmu.
                  <br />
                  Capai Tujuanmu.
                </h2>
                <p className="text-lg text-white/70 mb-6">
                  "Kingdom Awakening" adalah konferensi pemuda transformatif yang dirancang untuk memicu
                  pertumbuhan rohani dan memberdayakan setiap peserta untuk menemukan tujuan ilahi mereka.
                  Di dunia yang penuh dengan gangguan dan tantangan, kami menginspirasi para pemimpin muda
                  untuk bangkit dan selaras dengan takdir yang diberikan Tuhan kepada mereka.
                </p>
                <p className="text-lg text-white/70 mb-8">
                  Semua dijemput untuk hadir.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-red-500/20 z-10"></div>
                  <Image
                    src="/drummer.jpg"
                    alt="Youth Conference Drummer"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-lg overflow-hidden border-4 border-black z-20">
                  <Image
                    src="/singers.jpg"
                    alt="Youth Conference Singers"
                    fill
                    className="object-cover object-center"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-red-500/10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Speakers */}
        <section id="featured-speakers" className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
          <div className="absolute inset-0">
            <Image
              src="/IMG_6377.jpg"
              alt="Speaker Background"
              fill
              className="object-cover"
              style={{
                filter: 'blur(8px) brightness(0.6)', // Adjust '8px' for blur amount, '0.6' for darkness
                transform: 'scale(1.1)'
              }}
              quality={100}
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-4 border border-yellow-500 text-yellow-500 text-sm font-medium">
                PEMBICARA JEMPUTAN
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Pembicara Jemputan</h2>
            </div>
            <div className="flex flex-col gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Rev. Teh Yung Huat",
                  role: "SUPERINTENDANT AG YOUTH SABAH",
                  description: "Beliau merupakan Senior Pastor dari Calvary City Church Tawau (CCC Tawau) dan juga merupakan Superintendent AG Sabah. Memiliki lulusan Bachelor of Science (Hon) in Physics dari Queen Mary College, University of London pada tahun 1979. Beliau melanjutkan latihan teologinya dengan The Assemblies of God Bible College di Mattersey, England pada tahun 1979 - 1981. Beliau menamatkan program study Master of Medical Ministry dan Higher Leadership Institute pada tahun 2010. Beliau merupakan guru sama pada tahun 1982-1983. Pada tahun 1984, beliau memulakan sebuah restoran makanan segera ketika melayani sebagai 'lay pastor' sehinggalah pada tahun 1994 apabila beliau menjadi Senior Pastor sepenuh masa dan membawa pelayanya sehingga ke hari ini.",
                  image: "/revteh-formal.jpg"
                },
                {
                  name: "Rev. Brian Ranjan",
                  role: "PENGARAH BAHAGIAN YOUTH ALIVE MALAYSIA & SENIOR PASTOR PUTERA AMAN ASSEMBLY, SERI KEMBANGAN, SELANGOR",
                  description: "Rev. Brian Ranjan ialah seorang Senior Pastor di Putera Aman Assembly, Seri Kembangan, Selangor. Beliau menamatkan pengajian dalam bidang teologi (Ijazah Sarjana Muda) pada tahun 1997 dan memperoleh Master dalam pembangunan kepimpinan dengan Penghormatan Akademik pada tahun 2023. Sejak 2018, beliau telah melayani dalam Komiti Eksekutif Assemblies of God Malaysia, mengetuai Youth Alive Malaysia serta Komisi Penginjilan & Pemuridan. Sebelum beliau terlibat dalam  kepimpinan ini, beliau adalah seorang Pengarah AG’s National Worship dari 2008 hingga 2019. Rev. Brian telah berkahwin dengan Joyce Lim, dan mereka dikaruniakan dengan tiga orang anak: Isaac Keaton, Isaiah Jayden, dan Hannah Karleen.",
                  image: "/revbrian-formal.jpg"
                }
              ].map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-8 bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-lg overflow-hidden hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="md:w-1/3 relative aspect-[4/3] md:aspect-auto">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: "50% 20%" }}
                      quality={100}
                    />
                  </div>
                  <div className="flex-1 p-8">
                    <h3 className="text-2xl font-bold mb-2">{speaker.name}</h3>
                    <p className="text-yellow-500 text-sm mb-4">{speaker.role}</p>
                    <p className="text-white/70 text-base leading-relaxed">{speaker.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Removed the VIEW ALL SPEAKERS button */}
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/Tentatif AG YouTH CONFEREnce 2025 back.png"
              alt="Schedule Background"
              fill
              className="object-cover"
              style={{ 
                filter: 'blur(8px) brightness(0.6)',
                transform: 'scale(1.1)'
              }}
              quality={100}
            />
          </div>
          
          <div className="container px-4 md:px-6 relative">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-4 border border-yellow-500 text-yellow-500 text-sm font-medium">
                EVENT SCHEDULE
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Konferensi Muda-Mudi AG Sabah 2025</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                05-07 SEPTEMBER 2025
              </p>
            </div>

            <div className="relative w-full overflow-hidden rounded-lg">
              <Image
                src="/Tentatif AG YouTH CONFEREnce 2025 2.png"
                alt="Event Schedule"
                width={1200}
                height={800}
                className="w-full h-auto"
                quality={100}
              />
            </div>
          </div>
        </section>

        {/* Merchandise Section */}
        <section id="merchandise" className="py-24 bg-black">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-4 border border-yellow-500 text-yellow-500 text-sm font-medium">
                OFFICIAL MERCHANDISE
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">CONFERENCE T-SHIRT</h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  name: "",
                  price: "",
                  image: "/T-shirt design.png",
                  description: "",
                  contact: ""
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt="Conference T-shirt"
                      fill
                      className="object-contain"
                      priority
                      quality={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        {/* Call to Action */}
        <section id="call-to-action" className="py-24 bg-gradient-to-r from-yellow-500 to-red-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat mix-blend-overlay opacity-10"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-black">
                ADAKAH ANDA SUDAH BERSEDIA?
              </h2>
              <div className="flex justify-center">
                <Link
                  href="https://forms.gle/NbPBzFaTkvvHxXjPA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-gray-900 h-14 px-8 text-lg"
                  >
                    DAFTARLAH SEKARANG!
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 to-red-600"></div>
                <span className="text-xl font-bold tracking-wider"></span>
              </div>
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-6">IKUTI KAMI</h3>
                <div className="flex justify-center space-x-4">
                  <Link
                    href="https://www.facebook.com/agyouthsabah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <svg className="h-5 w-5 text-white/60 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/agyouthsabah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <svg className="h-5 w-5 text-white/60 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.youtube.com/@AGYouth-Sabah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <svg className="h-5 w-5 text-white/60 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="text-white/60 space-y-2 text-sm">
                <p>SDR. NATALIE - (014 - 783 8210)</p>
                <p>SDR. NECHELL - (019 - 897 3508)</p>
                <p>SDR JOY - (010 - 218 4608)</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} AG YOUTH SABAH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

