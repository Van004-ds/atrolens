import doodlePlanet from "@/assets/doodle-planet-1.png";
import doodleUfo from "@/assets/doodle-ufo.png";
import doodleStar from "@/assets/doodle-star.png";
import doodleRocket from "@/assets/doodle-rocket.png";
import doodleMoon from "@/assets/doodle-moon.png";
import doodleShootingStar from "@/assets/doodle-shooting-star.png";

const DoodleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      {/* Floating doodles */}
      <img 
        src={doodleStar} 
        alt="" 
        className="absolute top-[10%] left-[5%] w-12 h-12 animate-pulse"
      />
      <img 
        src={doodleMoon} 
        alt="" 
        className="absolute top-[15%] right-[8%] w-16 h-16"
      />
      <img 
        src={doodlePlanet} 
        alt="" 
        className="absolute top-[40%] left-[3%] w-20 h-20"
      />
      <img 
        src={doodleUfo} 
        alt="" 
        className="absolute top-[60%] right-[10%] w-24 h-24"
      />
      <img 
        src={doodleRocket} 
        alt="" 
        className="absolute bottom-[20%] left-[15%] w-16 h-16 rotate-45"
      />
      <img 
        src={doodleStar} 
        alt="" 
        className="absolute bottom-[30%] right-[20%] w-10 h-10"
      />
      <img 
        src={doodleShootingStar} 
        alt="" 
        className="absolute top-[25%] left-[40%] w-20 h-20"
      />
      <img 
        src={doodleStar} 
        alt="" 
        className="absolute top-[70%] left-[60%] w-8 h-8 animate-pulse"
      />
      <img 
        src={doodlePlanet} 
        alt="" 
        className="absolute bottom-[10%] right-[5%] w-16 h-16"
      />
    </div>
  );
};

export default DoodleBackground;
