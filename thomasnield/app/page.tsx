import {Header} from "./header"
import { About } from "./about"
import { Education } from "./education"
import { Experience } from "./experience"
export default function Home() {
  return (
    <main className="relative">
      <div className="grid grid-rows-3 gap-4">
          <div className="fixed left-0 right-0">
            <Header></Header>
          </div>
      </div>
        
      <div className="mt-20 bg-cyan-700">
        <About></About>
      </div>
      <div className="bg-cyan-800">
        <Education></Education>
      </div>
      
      <Experience></Experience>
    </main>
  )
}
