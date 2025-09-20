import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-16 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="shadow-lg card-enhanced">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-contrast">Welcome Back</CardTitle>
              <CardDescription className="text-contrast-muted">Sign in to your Taniti account to continue your island journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-contrast">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required className="bg-background dark:bg-gray-800 border-border dark:border-gray-600" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-contrast">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" required className="bg-background dark:bg-gray-800 border-border dark:border-gray-600" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="rounded border-border" />
                    <Label htmlFor="remember" className="text-sm text-contrast-muted">
                      Remember me
                    </Label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline dark:text-blue-400">
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-contrast-muted">Or continue with</span>
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
                <span className="text-contrast-muted">Don't have an account? </span>
                <Link href="/signup" className="text-primary hover:underline font-medium dark:text-blue-400">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
