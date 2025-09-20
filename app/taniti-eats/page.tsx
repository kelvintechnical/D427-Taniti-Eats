import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function TanitiEatsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/tropical-island-cuisine-and-dining-experience.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-300" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            Taniti Eats
          </h1>
          <p className="text-xl md:text-2xl text-balance opacity-90">
            Discover the flavors of paradise with fresh seafood, tropical fruits, and authentic island cuisine
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-contrast mb-6">Island Cuisine</h2>
            <p className="text-lg text-contrast-muted leading-relaxed max-w-2xl mx-auto">
              Experience the rich culinary traditions of Taniti Island, where fresh ingredients 
              meet traditional Polynesian cooking techniques to create unforgettable dining experiences.
            </p>
          </div>

          {/* Restaurant Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="card-enhanced">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-contrast">Fine Dining</h3>
                <p className="text-contrast-muted leading-relaxed">
                  Upscale restaurants featuring gourmet interpretations of traditional island dishes, 
                  perfect for special occasions and romantic dinners.
                </p>
              </CardContent>
            </Card>

            <Card className="card-enhanced">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-contrast">Local Eateries</h3>
                <p className="text-contrast-muted leading-relaxed">
                  Authentic family-run restaurants serving traditional recipes passed down through 
                  generations, offering a true taste of Taniti culture.
                </p>
              </CardContent>
            </Card>

            <Card className="card-enhanced">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-contrast">Beachfront Dining</h3>
                <p className="text-contrast-muted leading-relaxed">
                  Casual restaurants and bars right on the beach, where you can enjoy fresh seafood 
                  and tropical cocktails with your toes in the sand.
                </p>
              </CardContent>
            </Card>

            <Card className="card-enhanced">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-contrast">Food Markets</h3>
                <p className="text-contrast-muted leading-relaxed">
                  Vibrant local markets where you can sample fresh tropical fruits, local delicacies, 
                  and street food while experiencing the island's bustling atmosphere.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Featured Dishes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-contrast mb-8 text-center">Must-Try Dishes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-enhanced">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-contrast">Fresh Seafood</h3>
                  <p className="text-contrast-muted">
                    Daily catches of mahi-mahi, tuna, and lobster prepared with traditional island spices.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-enhanced">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-contrast">Tropical Fruits</h3>
                  <p className="text-contrast-muted">
                    Mango, papaya, coconut, and passion fruit served fresh or in delicious smoothies.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-enhanced">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-contrast">Traditional Dishes</h3>
                  <p className="text-contrast-muted">
                    Authentic Polynesian recipes including poi, kalua pig, and fresh poke bowls.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dining Tips */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-contrast mb-6">Dining Tips</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-contrast-muted leading-relaxed mb-4">
                Most restaurants accept major credit cards, but it's always good to have some cash 
                for local markets and smaller establishments.
              </p>
              <p className="text-lg text-contrast-muted leading-relaxed">
                Reservations are recommended for fine dining restaurants, especially during peak 
                tourist season. Don't forget to try the local tropical cocktails!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
