import { useState } from "react";

function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      className="px-3 py-2 border border-gray-300 rounded w-full"
      {...props}
    />
  );
}

function Button({ children, ...props }) {
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      {...props}
    >
      {children}
    </button>
  );
}

function Card({ children }) {
  return <div className="bg-white shadow rounded">{children}</div>;
}

function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-4">
          Where Your Family&apos;s Story Lives
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          One private platform to preserve your family&apos;s voice, photos, and memories —
          with AI-powered storytelling tools made just for families.
        </p>
        <div className="flex justify-center gap-2">
          <Input
            type="email"
            placeholder="Enter your email for early access"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={() => alert(`Thanks, ${email}!`)}>
            Notify Me
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        {[
          {
            title: "Narrated Photo Albums",
            desc: "Tap a photo and hear your loved one’s voice bring it to life."
          },
          {
            title: "AI Photo Restoration",
            desc: "Restore old, faded images in seconds with smart enhancement tools."
          },
          {
            title: "Private Family Timeline",
            desc: "Organize memories and invite relatives to contribute and share."
          }
        ].map((feature, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* About Section */}
      <div className="max-w-3xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-bold mb-3">Created by Ed Matte</h2>
        <p className="text-gray-600">
          With over 50 years in digital publishing and a passion for preserving family
          memories, Ed built this platform to make storytelling simple, emotional, and lasting for generations.
        </p>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16">
        <h3 className="text-lg font-semibold mb-2">Be the first to try it</h3>
        <Button onClick={() => alert(`Thanks, ${email}!`)}>Join the Waitlist</Button>
      </div>
    </div>
  );
}
