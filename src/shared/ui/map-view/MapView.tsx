import { IconMapPin, IconNavigation } from "@tabler/icons-react";
import { motion } from "framer-motion";

interface MapRestaurant {
  id: string;
  name: string;
  lat: number;
  lng: number;
  isSelected?: boolean;
}

interface MapViewProps {
  restaurants: MapRestaurant[];
  onPinClick: (restaurant: MapRestaurant) => void;
  selectedId?: string;
}

export function MapView({ restaurants, onPinClick, selectedId }: MapViewProps) {
  return (
    <div className="relative w-full h-full bg-muted rounded-2xl overflow-hidden">
      {/* Placeholder Map Background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-100 to-slate-200">
        {/* Grid Pattern */}
        <svg className="w-full h-full opacity-20">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Mock Roads */}
        <div className="absolute top-1/4 left-0 right-0 h-1 bg-white/60" />
        <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-white/80" />
        <div className="absolute top-3/4 left-0 right-0 h-1 bg-white/60" />
        <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-white/60" />
        <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-white/60" />
      </div>

      {/* Restaurant Pins */}
      {restaurants.map((restaurant) => (
        <motion.button
          key={restaurant.id}
          onClick={() => onPinClick(restaurant)}
          initial={{ scale: 0 }}
          animate={{
            scale: selectedId === restaurant.id ? 1.2 : 1,
            y: selectedId === restaurant.id ? [0, -8, 0] : 0,
          }}
          transition={{
            scale: { duration: 0.2 },
            y: {
              duration: 0.6,
              repeat: selectedId === restaurant.id ? Infinity : 0,
            },
          }}
          className="absolute"
          style={{
            left: `${restaurant.lng}%`,
            top: `${restaurant.lat}%`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <IconMapPin
            className={`w-8 h-8 ${
              selectedId === restaurant.id
                ? "text-primary fill-primary/20"
                : "text-destructive fill-destructive/20"
            }`}
            strokeWidth={2.5}
          />
        </motion.button>
      ))}

      {/* Current Location Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
      >
        <IconNavigation className="w-5 h-5 text-primary" fill="currentColor" />
      </motion.button>
    </div>
  );
}
