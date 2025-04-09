import Link from "next/link"
import { ArrowRight, Leaf, Coffee, Sun, MapPin } from "lucide-react"
import { Button } from "@/app/Components/ui/button"
import { Card, CardContent } from "@/app/Components/ui/card"
import CanvasComponent from "@/app/Components/ui/canvas"
import { Shops } from "./models/Tiendas"
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f8e5]">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 h-screen">
      <div className="bg-[#fce1b3] rounded-lg p-6 flex flex-col justify-between md:row-span-2">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900">Eco Natura</h1>
          <nav className="space-y-4">
            {["Inicio", "Productos", "Sostenibilidad", "Nuestra Historia", "Contacto"].map((item) => (
              <Link
                key={item}
                href="#"
                className="flex items-center text-amber-800 hover:text-amber-600 transition-colors"
              >
                <span className="text-lg">{item}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center mt-6">
          <CanvasComponent />
        </div>
        <div className="mt-auto">
          <p className="text-amber-800 mb-4">Descubre productos naturales que respetan el medio ambiente.</p>
          <Button className="bg-amber-700 hover:bg-amber-800 text-white">Explorar ahora</Button>
        </div>
      </div>

      <div className="bg-[#5e8c5e] rounded-lg p-6 text-white">
        <div className="h-full flex flex-col">
          <Leaf className="h-10 w-10 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Sostenibilidad</h2>
          <p className="mb-4">
            Nuestro compromiso con el planeta es inquebrantable. Utilizamos materiales reciclados y procesos
            eco-amigables.
          </p>
          <Link href="#" className="text-white hover:underline mt-auto inline-flex items-center">
            Leer más <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="bg-[#f8a7a7] rounded-lg p-6">
        <div className="h-full flex flex-col">
          <Sun className="h-10 w-10 mb-4 text-red-700" />
          <h2 className="text-2xl font-semibold mb-3 text-red-800">Productos Destacados</h2>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="bg-red-50 border-0">
                <CardContent className="p-3">
                  <div className="aspect-square bg-red-100 rounded-md mb-2"></div>
                  <p className="text-sm font-medium text-red-800">Producto {item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#8b4e34] rounded-lg p-6 text-white md:col-span-2">
        <div className="h-full flex flex-col">
          <div className="flex items-center mb-4">
            <Coffee className="h-10 w-10 mr-3" />
            <h2 className="text-2xl font-semibold">Nuestras Tiendas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {Shops.map((city) => (
              <div key={city.id} className="bg-[#9d5b40] p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">{city.Location}</h3>
                </div>
                <p className="text-sm opacity-90 mb-3">
                  {city.Address}
                  <br />
                  {city.Hours}
                </p>
                <Button variant="outline" className="w-full text-white border-white hover:bg-[#ffffff] hover:text-[#8b4e34]">
                  Ver ubicación
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-auto pt-6">
            Visita cualquiera de nuestras tiendas para descubrir la experiencia Eco Natura en persona.
          </p>
        </div>
      </div>
    </div>
  </main>
  );
}
