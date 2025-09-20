import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">taniti</div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Discover the pristine beauty of Taniti Island. From crystal-clear waters to lush tropical landscapes, your
              perfect island getaway awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Island
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-muted-foreground hover:text-primary transition-colors">
                  What To Do
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-muted-foreground hover:text-primary transition-colors">
                  Taniti Eats
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Visit Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Taniti Island</li>
              <li>Pacific Ocean</li>
              <li>info@taniti.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Taniti Island Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
