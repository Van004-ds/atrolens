export interface Exoplanet {
  id: string;
  name: string;
  discoveryYear: number;
  distanceFromEarth: number; // in light years
  mass: number; // in Jupiter masses
  radius: number; // in Jupiter radii
  orbitalPeriod: number; // in days
  starName: string;
  type: string;
  habitableZone: boolean;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  planetName: string;
  content: string;
}

export const exoplanets: Exoplanet[] = [
  {
    id: "1",
    name: "Kepler-442b",
    discoveryYear: 2015,
    distanceFromEarth: 1206,
    mass: 2.34,
    radius: 1.34,
    orbitalPeriod: 112.3,
    starName: "Kepler-442",
    type: "Super Earth",
    habitableZone: true,
    description: "A potentially habitable super-Earth orbiting within the habitable zone of its star, offering hope for Earth-like conditions."
  },
  {
    id: "2",
    name: "Proxima Centauri b",
    discoveryYear: 2016,
    distanceFromEarth: 4.24,
    mass: 1.27,
    radius: 1.1,
    orbitalPeriod: 11.2,
    starName: "Proxima Centauri",
    type: "Terrestrial",
    habitableZone: true,
    description: "The closest known exoplanet to our Solar System, orbiting in the habitable zone of our nearest stellar neighbor."
  },
  {
    id: "3",
    name: "TRAPPIST-1e",
    discoveryYear: 2017,
    distanceFromEarth: 39.5,
    mass: 0.62,
    radius: 0.92,
    orbitalPeriod: 6.1,
    starName: "TRAPPIST-1",
    type: "Terrestrial",
    habitableZone: true,
    description: "One of seven Earth-sized planets in the TRAPPIST-1 system, with the highest potential for liquid water on its surface."
  },
  {
    id: "4",
    name: "HD 189733 b",
    discoveryYear: 2005,
    distanceFromEarth: 64.5,
    mass: 1.13,
    radius: 1.14,
    orbitalPeriod: 2.2,
    starName: "HD 189733",
    type: "Hot Jupiter",
    habitableZone: false,
    description: "A cobalt blue gas giant with violent weather patterns, including glass rain falling sideways at 7000 km/h."
  },
  {
    id: "5",
    name: "55 Cancri e",
    discoveryYear: 2004,
    distanceFromEarth: 41,
    mass: 8.63,
    radius: 1.99,
    orbitalPeriod: 0.74,
    starName: "55 Cancri",
    type: "Super Earth",
    habitableZone: false,
    description: "A scorching super-Earth that may be covered in graphite and diamond, with surface temperatures exceeding 2400°C."
  },
  {
    id: "6",
    name: "Kepler-16b",
    discoveryYear: 2011,
    distanceFromEarth: 245,
    mass: 0.33,
    radius: 0.75,
    orbitalPeriod: 228.8,
    starName: "Kepler-16",
    type: "Gas Giant",
    habitableZone: false,
    description: "The first confirmed circumbinary planet, orbiting two stars like Tatooine from Star Wars."
  },
  {
    id: "7",
    name: "Kepler-452b",
    discoveryYear: 2015,
    distanceFromEarth: 1400,
    mass: 5,
    radius: 1.6,
    orbitalPeriod: 384.8,
    starName: "Kepler-452",
    type: "Super Earth",
    habitableZone: true,
    description: "Earth's older, bigger cousin orbiting a Sun-like star in the habitable zone, earning it the nickname 'Earth 2.0'."
  },
  {
    id: "8",
    name: "LHS 1140 b",
    discoveryYear: 2017,
    distanceFromEarth: 40,
    mass: 6.6,
    radius: 1.4,
    orbitalPeriod: 24.7,
    starName: "LHS 1140",
    type: "Super Earth",
    habitableZone: true,
    description: "A rocky world in the habitable zone, possibly covered by a global ocean beneath a thick ice shell."
  },
  {
    id: "9",
    name: "WASP-121b",
    discoveryYear: 2015,
    distanceFromEarth: 850,
    mass: 1.18,
    radius: 1.87,
    orbitalPeriod: 1.27,
    starName: "WASP-121",
    type: "Hot Jupiter",
    habitableZone: false,
    description: "An ultra-hot Jupiter so close to its star that heavy metals like iron and magnesium vaporize in its atmosphere."
  },
  {
    id: "10",
    name: "TOI-700 d",
    discoveryYear: 2020,
    distanceFromEarth: 101.4,
    mass: 1.72,
    radius: 1.19,
    orbitalPeriod: 37.4,
    starName: "TOI-700",
    type: "Terrestrial",
    habitableZone: true,
    description: "TESS's first Earth-sized planet discovered in the habitable zone, with potential for a temperate climate."
  },
  {
    id: "11",
    name: "K2-18b",
    discoveryYear: 2015,
    distanceFromEarth: 124,
    mass: 8.6,
    radius: 2.6,
    orbitalPeriod: 33,
    starName: "K2-18",
    type: "Mini-Neptune",
    habitableZone: true,
    description: "First exoplanet in the habitable zone with detected water vapor in its atmosphere, making it a prime candidate for life."
  },
  {
    id: "12",
    name: "Kepler-22b",
    discoveryYear: 2011,
    distanceFromEarth: 620,
    mass: 35,
    radius: 2.4,
    orbitalPeriod: 289.9,
    starName: "Kepler-22",
    type: "Super Earth",
    habitableZone: true,
    description: "The first confirmed exoplanet found by Kepler to orbit in the habitable zone of a Sun-like star."
  }
];

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "New Super-Earth Discovered in Nearby Star System",
    date: "2024-10-15",
    excerpt: "Astronomers have discovered a promising super-Earth orbiting a red dwarf star just 45 light-years away.",
    planetName: "LHS 1140 b",
    content: "Using advanced spectroscopy techniques, researchers have confirmed the presence of atmospheric water vapor on LHS 1140 b, making it one of the most promising candidates for habitability discovered to date."
  },
  {
    id: "2",
    title: "JWST Reveals Atmospheric Composition of Distant Exoplanet",
    date: "2024-09-28",
    excerpt: "James Webb Space Telescope provides unprecedented detail of K2-18b's atmosphere, detecting biosignature gases.",
    planetName: "K2-18b",
    content: "The James Webb Space Telescope has detected dimethyl sulfide in K2-18b's atmosphere, a gas only produced by life on Earth. This marks a significant milestone in the search for extraterrestrial life."
  },
  {
    id: "3",
    title: "Seven Earth-Sized Worlds Found Orbiting TRAPPIST-1",
    date: "2024-08-12",
    excerpt: "Revolutionary discovery reveals an entire system of potentially habitable planets around a single cool dwarf star.",
    planetName: "TRAPPIST-1e",
    content: "Three of the seven planets orbit in the habitable zone, with TRAPPIST-1e showing the most promising signs of Earth-like conditions including possible oceans and a stable atmosphere."
  },
  {
    id: "4",
    title: "Proxima b Shows Signs of Magnetic Field",
    date: "2024-07-05",
    excerpt: "Our closest exoplanet neighbor may have protection from stellar radiation, boosting habitability prospects.",
    planetName: "Proxima Centauri b",
    content: "New radio observations suggest Proxima Centauri b possesses a magnetic field strong enough to shield its surface from harmful stellar wind, dramatically increasing the possibility of life."
  },
  {
    id: "5",
    title: "Diamond Planet Confirmed: 55 Cancri e Study",
    date: "2024-06-20",
    excerpt: "Spectroscopic analysis confirms the exotic composition of this carbon-rich super-Earth.",
    planetName: "55 Cancri e",
    content: "Researchers have confirmed that 55 Cancri e's mantle is likely rich in diamonds and graphite due to its high carbon-to-oxygen ratio, making it one of the most valuable planets in the known universe."
  },
  {
    id: "6",
    title: "Real-Life Tatooine: Binary Star System Planet Detailed",
    date: "2024-05-14",
    excerpt: "New observations of Kepler-16b reveal complex orbital dynamics in this Star Wars-like world.",
    planetName: "Kepler-16b",
    content: "Advanced modeling shows that Kepler-16b experiences dramatic seasonal variations as it orbits its two parent stars, with each star casting unique shadows across the planet's surface."
  }
];
