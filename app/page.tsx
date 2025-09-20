import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/tropical-island-paradise-with-crystal-clear-turquo.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30 dark:bg-black/60 transition-colors duration-300" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Welcome to Taniti
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
            Discover paradise on earth. Crystal waters, pristine beaches, and
            unforgettable adventures await.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-contrast mb-4">
              Why Choose Taniti?
            </h2>
            <p className="text-xl text-contrast-muted max-w-2xl mx-auto">
              Experience the perfect blend of natural beauty, adventure, and
              relaxation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-enhanced">
              <CardContent className="p-8">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: `url('/pristine-tropical-beach-with-white-sand-and-palm-t.jpg')`,
                  }}
                />
                <h3 className="text-2xl font-semibold mb-4 text-contrast">
                  Pristine Beaches
                </h3>
                <p className="text-contrast-muted">
                  Miles of untouched white sand beaches with crystal-clear
                  waters perfect for swimming and relaxation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-enhanced">
              <CardContent className="p-8">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: `url('/tropical-adventure-activities-like-snorkeling-and-.jpg')`,
                  }}
                />
                <h3 className="text-2xl font-semibold mb-4 text-contrast">
                  Adventure Awaits
                </h3>
                <p className="text-contrast-muted">
                  From snorkeling in coral reefs to hiking through lush
                  rainforests, adventure is around every corner.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-enhanced">
              <CardContent className="p-8">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: `url('/tropical-island-cuisine-and-dining-experience.jpg')`,
                  }}
                />
                <h3 className="text-2xl font-semibold mb-4 text-contrast">
                  Island Cuisine
                </h3>
                <p className="text-contrast-muted">
                  Savor fresh seafood and tropical flavors at our world-class
                  restaurants and local eateries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Island Adventure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of travelers who have discovered the magic of Taniti
            Island
          </p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Plan Your Visit
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
