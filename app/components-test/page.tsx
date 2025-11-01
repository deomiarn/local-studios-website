import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SectionContainer } from "@/components/ui/section-container"
import { PageHeader } from "@/components/ui/page-header"

export default function ComponentsTestPage() {
  return (
    <div className="min-h-screen bg-white">
      <SectionContainer>
        <PageHeader
          title="Component Library Test"
          subtitle="Verifying all shadcn/ui components and custom Local Studios components"
        />
      </SectionContainer>

      {/* Button Variants Section */}
      <SectionContainer className="bg-mist">
        <h2 className="text-3xl font-bold mb-6 text-ink">Button Variants</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="brand-primary">Brand Primary Button</Button>
            <Button variant="brand-secondary">Brand Secondary Button</Button>
            <Button variant="default">Default Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="brand-primary" size="sm">Small Brand Primary</Button>
            <Button variant="brand-primary" size="lg">Large Brand Primary</Button>
            <Button variant="brand-secondary" size="sm">Small Brand Secondary</Button>
            <Button variant="brand-secondary" size="lg">Large Brand Secondary</Button>
          </div>
        </div>
      </SectionContainer>

      {/* Card Component Section */}
      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6 text-ink">Card Component</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-ink">This is a sample card component with header, title, description, and content sections.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Another Card</CardTitle>
              <CardDescription>More information about the card</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-ink">Cards are useful for organizing and grouping related content.</p>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      {/* Form Components Section */}
      <SectionContainer className="bg-mist">
        <h2 className="text-3xl font-bold mb-6 text-ink">Form Components</h2>
        <div className="max-w-md space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              className="border-ink focus:border-ink"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="border-ink focus:border-ink"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your message here..."
              rows={4}
              className="border-ink focus:border-ink"
            />
          </div>

          <Button variant="brand-primary" className="w-full">
            Submit Form
          </Button>
        </div>
      </SectionContainer>

      {/* Brand Colors Section */}
      <SectionContainer>
        <h2 className="text-3xl font-bold mb-6 text-ink">Local Studios Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="w-full h-24 bg-ink rounded-lg mb-4"></div>
            <p className="font-semibold text-ink">Ink</p>
            <p className="text-sm text-muted-text">#111827</p>
          </Card>

          <Card className="p-4">
            <div className="w-full h-24 bg-white border-2 border-ink rounded-lg mb-4"></div>
            <p className="font-semibold text-ink">White</p>
            <p className="text-sm text-muted-text">#ffffff</p>
          </Card>

          <Card className="p-4">
            <div className="w-full h-24 bg-mist rounded-lg mb-4"></div>
            <p className="font-semibold text-ink">Mist</p>
            <p className="text-sm text-muted-text">#F3F4F6</p>
          </Card>

          <Card className="p-4">
            <div className="w-full h-24 bg-gray-300 rounded-lg mb-4"></div>
            <p className="font-semibold text-ink">Muted Text</p>
            <p className="text-sm text-muted-text">#585D68</p>
          </Card>
        </div>
      </SectionContainer>

      {/* Typography Section */}
      <SectionContainer className="bg-mist">
        <h2 className="text-3xl font-bold mb-6 text-ink">Typography</h2>
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-display font-bold text-ink mb-2">Heading 1</h1>
            <p className="text-sm text-muted-text">text-5xl, font-display, font-bold</p>
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold text-ink mb-2">Heading 2</h2>
            <p className="text-sm text-muted-text">text-4xl, font-display, font-bold</p>
          </div>
          <div>
            <h3 className="text-3xl font-display font-bold text-ink mb-2">Heading 3</h3>
            <p className="text-sm text-muted-text">text-3xl, font-display, font-bold</p>
          </div>
          <div>
            <p className="text-base text-ink mb-2">Body text with standard line height and color</p>
            <p className="text-sm text-muted-text">text-base, text-ink</p>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
