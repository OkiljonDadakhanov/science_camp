// "use client"

// import { useState, useEffect, useRef } from "react"
// import dynamic from "next/dynamic"
// import { Card } from "@/components/ui/card"
// import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"
// import { Button } from "@/components/ui/button"

// // Dynamically import the map components with no SSR
// const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
// const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
// const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
// const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

// export default function LocationMap() {
//   const [isMounted, setIsMounted] = useState(false)
//   const leafletRef = useRef(null)

//   // Camp location coordinates (example: somewhere in California)
//   const campLocation = [37.7749, -122.4194]

//   useEffect(() => {
//     // Only run in browser environment
//     if (typeof window !== "undefined") {
//       // Import Leaflet CSS
//       import("leaflet/dist/leaflet.css")

//       // Import Leaflet and fix icon issues
//       ;(async () => {
//         const L = await import("leaflet")
//         leafletRef.current = L

//         // Fix for default marker icons in Leaflet with Next.js
//         delete L.Icon.Default.prototype._getIconUrl
//         L.Icon.Default.mergeOptions({
//           iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//           iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//           shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
//         })

//         setIsMounted(true)
//       })()
//     }
//   }, [])

//   return (
//     <section id="location" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
//       <div className="container px-4 md:px-6">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Location</h2>
//             <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//               Find us at our state-of-the-art campus with modern facilities and beautiful surroundings.
//             </p>
//           </div>
//         </div>

//         <div className="grid gap-8 lg:grid-cols-3">
//           <Card className="p-6 lg:col-span-1">
//             <h3 className="text-xl font-bold mb-4">Contact Information</h3>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <MapPin className="h-5 w-5 text-blue-600 mt-1" />
//                 <div>
//                   <h4 className="font-medium">Address</h4>
//                   <p className="text-gray-500">
//                     123 Science Way
//                     <br />
//                     Innovation City, ST 12345
//                     <br />
//                     United States
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <Phone className="h-5 w-5 text-blue-600 mt-1" />
//                 <div>
//                   <h4 className="font-medium">Phone</h4>
//                   <p className="text-gray-500">(123) 456-7890</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <Mail className="h-5 w-5 text-blue-600 mt-1" />
//                 <div>
//                   <h4 className="font-medium">Email</h4>
//                   <p className="text-gray-500">info@sciencecamp.org</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 space-y-4">
//               <h3 className="text-xl font-bold">Getting Here</h3>
//               <div className="space-y-2">
//                 <h4 className="font-medium">By Car</h4>
//                 <p className="text-gray-500">30 minutes from Downtown. Free parking available on campus.</p>
//               </div>

//               <div className="space-y-2">
//                 <h4 className="font-medium">Public Transportation</h4>
//                 <p className="text-gray-500">Bus routes 42 and 108 stop directly in front of the campus.</p>
//               </div>

//               <div className="space-y-2">
//                 <h4 className="font-medium">Shuttle Service</h4>
//                 <p className="text-gray-500">We offer shuttle service from major airports and train stations.</p>
//               </div>
//             </div>

//             <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
//               <ExternalLink className="mr-2 h-4 w-4" /> Get Directions
//             </Button>
//           </Card>

//           <div className="lg:col-span-2 h-[500px] rounded-lg overflow-hidden shadow-lg">
//             {isMounted ? (
//               <MapContainer
//                 center={campLocation}
//                 zoom={13}
//                 scrollWheelZoom={false}
//                 style={{ height: "100%", width: "100%" }}
//                 className="z-0"
//               >
//                 <TileLayer
//                   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={campLocation}>
//                   <Popup>
//                     <div className="text-center">
//                       <strong>Science Olympiad Center</strong>
//                       <br />
//                       123 Science Way
//                       <br />
//                       Innovation City, ST 12345
//                     </div>
//                   </Popup>
//                 </Marker>
//               </MapContainer>
//             ) : (
//               <div className="h-full w-full bg-gray-100 flex items-center justify-center">
//                 <p className="text-gray-500">Loading map...</p>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">Nearby Attractions</h3>
//           <div className="grid gap-4 md:grid-cols-3">
//             <div className="space-y-2">
//               <h4 className="font-medium text-blue-600">Science Museum</h4>
//               <p className="text-gray-500">Just 10 minutes away, featuring interactive exhibits and IMAX theater.</p>
//             </div>
//             <div className="space-y-2">
//               <h4 className="font-medium text-blue-600">Natural History Park</h4>
//               <p className="text-gray-500">
//                 Beautiful hiking trails and wildlife observation points within walking distance.
//               </p>
//             </div>
//             <div className="space-y-2">
//               <h4 className="font-medium text-blue-600">Innovation Center</h4>
//               <p className="text-gray-500">Technology showcase and workshops, perfect for field trips during camp.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
