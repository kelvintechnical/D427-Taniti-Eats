"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/tropical-island-paradise-with-crystal-clear-turquo.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-300" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-balance opacity-90">
            Get in touch with our team to plan your perfect Taniti Island getaway
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card className="card-enhanced">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-contrast">Send us a Message</CardTitle>
                  <CardDescription className="text-contrast-muted">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-contrast">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          required 
                          className="bg-background dark:bg-gray-800 border-border dark:border-gray-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-contrast">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          required 
                          className="bg-background dark:bg-gray-800 border-border dark:border-gray-600"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-contrast">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        className="bg-background dark:bg-gray-800 border-border dark:border-gray-600"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-contrast">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 123-4567" 
                        className="bg-background dark:bg-gray-800 border-border dark:border-gray-600"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="inquiry" className="text-contrast">Inquiry Type</Label>
                      <Select>
                        <SelectTrigger className="bg-background dark:bg-gray-800 border-border dark:border-gray-600">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="booking">Booking & Reservations</SelectItem>
                          <SelectItem value="activities">Activities & Tours</SelectItem>
                          <SelectItem value="dining">Dining & Restaurants</SelectItem>
                          <SelectItem value="accommodation">Accommodation</SelectItem>
                          <SelectItem value="transportation">Transportation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-contrast">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your dream Taniti Island experience..."
                        rows={5}
                        required
                        className="bg-background dark:bg-gray-800 border-border dark:border-gray-600"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-enhanced">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-contrast mb-6">Get in Touch</h2>
                <p className="text-lg text-contrast-muted leading-relaxed mb-8">
                  Our friendly team is here to help you plan the perfect island adventure. 
                  Whether you have questions about activities, need help with bookings, 
                  or want to learn more about Taniti Island, we're just a message away.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="card-enhanced">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-contrast mb-2">Phone</h3>
                        <p className="text-contrast-muted mb-1">+1 (555) TANITI-1</p>
                        <p className="text-contrast-muted">+1 (555) 826-4841</p>
                        <p className="text-sm text-contrast-muted mt-2">Available 24/7 for emergencies</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-enhanced">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-contrast mb-2">Email</h3>
                        <p className="text-contrast-muted mb-1">info@tanitiisland.com</p>
                        <p className="text-contrast-muted">bookings@tanitiisland.com</p>
                        <p className="text-sm text-contrast-muted mt-2">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-enhanced">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-contrast mb-2">Location</h3>
                        <p className="text-contrast-muted mb-1">Taniti Island Tourism Center</p>
                        <p className="text-contrast-muted">123 Paradise Boulevard</p>
                        <p className="text-contrast-muted">Taniti Island, Pacific Ocean</p>
                        <p className="text-sm text-contrast-muted mt-2">Near the main harbor</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-enhanced">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-contrast mb-2">Office Hours</h3>
                        <div className="space-y-1 text-contrast-muted">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: 10:00 AM - 2:00 PM</p>
                        </div>
                        <p className="text-sm text-contrast-muted mt-2">Pacific Standard Time</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-contrast mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-contrast-muted max-w-2xl mx-auto">
                Quick answers to common questions about visiting Taniti Island
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-enhanced">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-contrast mb-3">Best Time to Visit?</h3>
                  <p className="text-contrast-muted">
                    Taniti enjoys a tropical climate year-round. The dry season (May-October) 
                    offers the best weather for outdoor activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-enhanced">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-contrast mb-3">How to Get Here?</h3>
                  <p className="text-contrast-muted">
                    Fly into Taniti International Airport (TNI) from major Pacific hubs 
                    including Honolulu, Sydney, and Los Angeles.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-enhanced">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-contrast mb-3">What to Pack?</h3>
                  <p className="text-contrast-muted">
                    Light, breathable clothing, swimwear, sunscreen, and comfortable 
                    walking shoes. Don't forget your camera!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
