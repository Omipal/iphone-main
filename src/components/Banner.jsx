import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { watchVideo } from "../utils";
const Banner = () => {
  return (
    <section className="w-full bg-white relative">
        <div className="h-full w-full flex-center flex-col pt-20">
        <div className="md:w-10/12 w-9/12">
            <video className="pointer-events-none" autoPlay muted playsInline={true} key={watchVideo}>
                <source src={watchVideo} type="video/mp4" />
            </video>
            </div>
        </div>
    </section>
  )
}

export default Banner;