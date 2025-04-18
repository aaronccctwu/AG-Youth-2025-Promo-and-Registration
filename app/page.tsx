import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag, ChevronRight, Scale } from "lucide-react"
import { Countdown } from "@/components/countdown"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/AGSABAH.png"
              alt="AG Sabah Logo"
              width={48}
              height={48}
              className="rounded-full scale-[2.5]"
              style={{ transform: 'scale(2.5)' }}
            />
            <span className="text-xl font-bold tracking-wider">SABAH AG YOUTH</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              ABOUT
            </Link>
            <Link href="#featured-speakers" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              SPEAKERS
            </Link>
            <Link href="#schedule" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              SCHEDULE
            </Link>
            <Link href="#merchandise" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              MERCHANDISE
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

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

          <div className="relative container flex flex-col items-start justify-center min-h-[90vh] px-4 py-24">
            <div className="max-w-3xl text-left">
              <div className="inline-block px-4 py-1 mb-6 border border-yellow-500 text-yellow-500 text-sm font-medium">
                05-07 SEPT, 2025 • CALVARY CITY CHURCH TAWAU
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight">
                CONQUEROR
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
                  OF DESTINY
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl">
                A transformative conference empowering youth to break barriers, overcome challenges, and forge their own
                path to greatness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#call-to-action">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold hover:from-yellow-600 hover:to-red-600 h-14 px-8 text-lg"
                  >
                    REGISTER NOW
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
                  ABOUT THE CONFERENCE
                </div>
                <h2 className="text-4xl font-bold tracking-tight mb-6">
                  Forge Your Path.
                  <br />
                  Shape Your Future.
                </h2>
                <p className="text-lg text-white/70 mb-6">
                  "Conqueror of Destiny" is a groundbreaking youth conference designed to ignite the potential within
                  every participant. In a world of endless possibilities and challenges, we empower young leaders to
                  take control of their narrative.
                </p>
                <p className="text-lg text-white/70 mb-8">
                  Through immersive workshops, inspiring keynotes, and collaborative sessions, you'll develop the
                  mindset and skills needed to overcome obstacles and create the future you envision.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">500+</div>
                    <div className="text-sm text-white/70">ATTENDEES</div>
                  </div>
                  <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">24</div>
                    <div className="text-sm text-white/70">SPEAKERS</div>
                  </div>
                  <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">12</div>
                    <div className="text-sm text-white/70">WORKSHOPS</div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold hover:from-yellow-600 hover:to-red-600">
                  EXPLORE PROGRAM
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
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
        <section id="featured-speakers" className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-4 border border-yellow-500 text-yellow-500 text-sm font-medium">
                FEATURED SPEAKERS
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Pembicara Undangan</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Pembicara Undangan yang berpengaruh dalam AG YOUTH SABAH
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Rev. Teh",
                  role: "SUPERINTENDANT AG YOUTH SABAH",
                  description: "Dedicated to transforming youth through innovative ministry approaches.",
                  image: "/revteh.jpg",
                  position: "20% 30%", // Adjusted position to center the face
                  scale: "1.2" // Adjusted scale for better fit
                },
                {
                  name: "Rev. Joseph",
                  role: "KETUA  AG YOUTH SABAH",
                  description: "Passionate about empowering the next generation of leaders.",
                  image: "/revjoseph.jpg",
                  position: "30% 50%", // Adjusted to center horizontally and slightly higher vertically
                  scale: "1.3" // Adjusted scale to show proper proportions
                },
                {
                  name: "Rev. Roland",
                  role: "PENOLONG AG YOUTH SABAH",
                  description: "Leading with wisdom and experience in youth ministry for over two decades.",
                  image: "/revroland.jpg",
                  position: "50% 30%",
                  scale: "2.0"
                },
              ].map((speaker, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-black border border-white/10 transition-all duration-300 hover:border-yellow-500/50"
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.1]"
                      style={{ 
                        objectPosition: speaker.position,
                        transform: `scale(${speaker.scale || "1"})`
                      }}
                      quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6 absolute bottom-0 left-0 right-0">
                    <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                    <p className="text-yellow-500 text-sm mb-3">{speaker.role}</p>
                    <p className="text-white/70 text-sm">{speaker.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Removed the VIEW ALL SPEAKERS button */}
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-24 bg-black">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-4 border border-yellow-500 text-yellow-500 text-sm font-medium">
                EVENT SCHEDULE
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Konferensi Muda-Mudi AG Sabah 2024</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                18-20 SEPT 2024
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-yellow-500/20">
                    <th className="border border-white/10 p-4 text-left">MASA/TARIKH</th>
                    <th className="border border-white/10 p-4 text-center">RABU, 18 SEPT</th>
                    <th className="border border-white/10 p-4 text-center">KHAMIS, 19 SEPT</th>
                    <th className="border border-white/10 p-4 text-center">JUMAAT, 20 SEPT</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { time: "6:30 AM", day2: "SARAPAN PAGI", day3: "SARAPAN PAGI" },
                    { time: "8:00 AM", day2: "ICE BREAKING", day3: "ICE BREAKING" },
                    { time: "8:20 AM", day2: "PY CCC WORSHIP TEAM", day3: "PY CCC WORSHIP TEAM" },
                    { time: "8:50 AM", day2: "SESI 2\nPDT JEFFRI DARMA", day3: "SESI 7\nPDT JEFFRI DARMA" },
                    { time: "9:50 AM", day2: "PERBINCANGAN KUMPULAN", day3: "PERBINCANGAN KUMPULAN" },
                    { time: "10:05 AM", day2: "KK WORSHIP TEAM", day3: "LD & KUNAK WORSHIP TEAM" },
                    { time: "10:35 AM", day1: "KETIBAAN\n& PENDAFTARAN", day2: "SESI 3\nREV TEH", day3: "SESI 8\nREV DANIEL CHONG" },
                    { time: "11:35 AM", day2: "DOA BAPTISAN & PENGURPAN ROH KUDUS", day3: "SESI FOTOGRAFI" },
                    { time: "12:00 NOON", colspan: "3", content: "LUNCH TIME!!" },
                    { time: "1:00 PM", day2: "KK WORSHIP TEAM", day3: "LD & KUNAK WORSHIP TEAM" },
                    { time: "1:30 PM", day2: "SESI 4\nREV TEH", day3: "SESI 9\nREV DANIEL CHONG" },
                    { time: "2:30 PM", day2: "BREAK (15 MIN)", day3: "KESAKSIAN / REFLEKSI" },
                    { time: "3:00 PM", day2: "SESI 5 (2:45 PM)\nPDT FRANS MANSIL", day3: "GAMES" },
                    { time: "5:00 PM", colspan: "3", content: "MANDI" },
                    { time: "6:00 PM", colspan: "3", content: "IT'S TIME FOR DINNER!! YEAH!" },
                    { time: "7:00 PM", day1: "WELCOMING & TAKLIMAT", day2: "DOOR OPEN", day3: "DOOR OPEN" },
                    { time: "7:30 PM", day1: "OPENING CEREMONY\nTAWAU CCC WORSHIP", day2: "PY CCC WORSHIP TEAM", day3: "CLOSING CEREMONY\nKK WORSHIP TEAM" },
                    { time: "8:15 PM", day1: "SESI 1\nREV TEH", day2: "SESI 6\nPDT JEFFRI DARMA", day3: "SESI 10\nPDT JEFFRI DARMA" },
                    { time: "10:00 PM", colspan: "3", content: "REFRESHMENT" },
                    { time: "11:00 PM", day1: "", day2: "SELAMAT MALAM", day3: "JUMPA LAGI DI KONFERENSI AKAN DATANG!" }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-white/10">
                      <td className="border border-white/10 p-4 font-medium text-yellow-500">{row.time}</td>
                      <td className="border border-white/10 p-4 text-center whitespace-pre-line">{row.day1}</td>
                      <td className="border border-white/10 p-4 text-center whitespace-pre-line">{row.day2}</td>
                      <td className="border border-white/10 p-4 text-center whitespace-pre-line">{row.day3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              <h2 className="text-4xl font-bold tracking-tight mb-4">AG YOUTH CONFERENCE LIMITED EDITION T_SHIRT</h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  name: "",
                  price: "RM 30",
                  image: "/AGtshirt.jpg",
                  description: "Limited Edition AG Camp T-Shirt (M, L, 2XL, 3XL)",
                  contact: ""
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl bg-gradient-to-b from-purple-900/20 to-black"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover opacity-90"
                      priority
                      quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="text-3xl font-bold mb-2">{item.name}</h3>
                      <p className="text-lg text-white/90 mb-2">{item.description}</p>
                      <p className="text-yellow-500 font-bold text-2xl mb-4">{item.price}</p>
                      <Link
                        href="/merchandise/register"
                        className="inline-block"
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold hover:from-yellow-600 hover:to-red-600"
                        >
                          BUY NOW
                          <ShoppingBag className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <p className="text-white/80 mt-4">{item.contact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* End of merchandise section content */}
          </div>
        </section>

        {/* Call to Action */}
        {/* Call to Action */}
        <section id="call-to-action" className="py-24 bg-gradient-to-r from-yellow-500 to-red-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat mix-blend-overlay opacity-10"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-black">
                ARE YOU READY TO CONQUER YOUR DESTINY?
              </h2>
              <p className="text-xl text-black/80 mb-10">
                Join hundreds of young leaders and embark on a journey that will transform your future. The path to
                greatness begins with a single step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://forms.gle/NbPBzFaTkvvHxXjPA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-gray-900 h-14 px-8 text-lg"
                  >
                    PERSONAL REGISTRATION
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="https://forms.gle/KrLvFQCpRFSLwqjCA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-100 h-14 px-8 text-lg"
                  >
                    CHURCH REGISTRATION
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
                <span className="text-xl font-bold tracking-wider">CONQUEROR</span>
              </div>
              <p className="text-white/60 mb-6 max-w-sm text-center">
                The premier youth conference empowering the next generation to take control of their future.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-6">FOLLOW US</h3>
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
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@AGYouth-Sabah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <svg className="h-5 w-5 text-white/60 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Conqueror of Destiny Conference. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

