import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-16 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Join Taniti</CardTitle>
              <CardDescription>
                Create your account and start planning your perfect island
                getaway
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* business/pleasure */}
                  <div className="space-y-2">
                    <Label className="text-sm">Trip Purpose</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="business"
                          name="tripPurpose"
                          value="business"
                          className="h-4 w-4 text-primary border-gray-300"
                          required
                        />
                        <Label htmlFor="business">Business</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="pleasure"
                          name="tripPurpose"
                          value="pleasure"
                          className="h-4 w-4 text-primary border-gray-300"
                          required
                        />
                        <Label htmlFor="pleasure">Pleasure</Label>
                      </div>
                    </div>
                  </div>
                  {/* business/pleasure */} {/* business/pleasure */}
                  <div className="space-y-2">
                    <Label className="text-sm">Trip Purpose</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="business"
                          name="tripPurpose"
                          value="business"
                          className="h-4 w-4 text-primary border-gray-300"
                          required
                        />
                        <Label htmlFor="business">Business</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="pleasure"
                          name="tripPurpose"
                          value="pleasure"
                          className="h-4 w-4 text-primary border-gray-300"
                          required
                        />
                        <Label htmlFor="pleasure">Pleasure</Label>
                      </div>
                    </div>
                  </div>
                  {/* business/pleasure */}
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="rounded border-border"
                    required
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-primary hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="rounded border-border"
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    Subscribe to our newsletter for travel tips and special
                    offers
                  </Label>
                </div>
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full bg-transparent">
                  Google
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Facebook
                </Button>
              </div>

              <div className="text-center text-sm">
                <span className="text-muted-foreground">
                  Already have an account?{" "}
                </span>
                <Link
                  href="/login"
                  className="text-primary hover:underline font-medium"
                >
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
