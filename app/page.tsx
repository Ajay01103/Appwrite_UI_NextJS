import { CTA } from "@/components/CTA"
import { Hero } from "@/components/Hero"
import HomeNavbar from "@/components/HomeNavbar"
import LogoGrid from "@/components/LogoGrid"

export default function Home() {
  return (
    <div>
      <HomeNavbar />
      <Hero />
      <LogoGrid />
      <CTA />
    </div>
  )
}
