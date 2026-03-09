import { useState } from "react";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

import jm from "@/pictures/jm.jpg";
import rom from "@/pictures/rom.jpg";

interface Profile {
  id: number;
  name: string;
  role: string;
  bgColor: string;
  isActive?: boolean;
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Jay Are Galinada",
    role: "Team Member",
    bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
    isActive: true,
  },
  {
    id: 2,
    name: "John Michael Lagumbay",
    role: "Team Member",
    bgColor: "bg-gradient-to-br from-amber-500 to-amber-700",
  },
  {
    id: 3,
    name: "John Paul Lagumbay",
    role: "Team Member",
    bgColor: "bg-gradient-to-br from-teal-600 to-teal-800",
  },
  {
    id: 4,
    name: "Rom Joses Ocampo",
    role: "Team Member",
    bgColor: "bg-gradient-to-br from-slate-400 to-slate-600",
  },
];

export const ProfileSelector = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center gap-12 py-12">
      
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Select Profile</h2>
        <p className="text-white/70">Choose a profile to continue</p>
      </div>

      <div
        className="relative flex items-center justify-center"
        style={{ width: "1000px", height: "400px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {profiles.map((profile, index) => {

          const baseOffset = 30;
          const hoveredSpacing = 280;

          const translateX = isHovered
            ? (index - 1.5) * hoveredSpacing
            : index * baseOffset;

          return (
            <Card
              key={profile.id}
              className={`absolute cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:z-50 ${
                isHovered ? "hover:translate-y-[-20px]" : ""
              }`}
              style={{
                width: "260px",
                height: "340px",
                transform: `translateX(${translateX}px)`,
                zIndex: isHovered ? 10 + index : 10 - index,
              }}
            >
              <div className="relative h-full overflow-hidden rounded-lg shadow-2xl">

                {/* Profile Image */}
                <div
                  className={`h-2/3 ${profile.bgColor} relative flex items-center justify-center`}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm flex items-center justify-center">

                    {profile.name === "John Michael Lagumbay" ? (
                      <img
                        src={jm}
                        alt="John Michael Lagumbay"
                        className="w-full h-full object-cover"
                      />
                    ) : profile.name === "Rom Joses Ocampo" ? (
                      <img
                        src={rom}
                        alt="Rom Joses Ocampo"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-5xl text-white font-bold">
                        {profile.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    )}

                  </div>

                  {profile.isActive && (
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>

                {/* Profile Info */}
                <div className="h-1/3 bg-card p-4 flex flex-col justify-center">
                  <h3 className="font-semibold text-foreground text-center mb-1 line-clamp-2">
                    {profile.name}
                  </h3>

                  <p className="text-sm text-muted-foreground text-center">
                    {profile.role}
                  </p>
                </div>

              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};