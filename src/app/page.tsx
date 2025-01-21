import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            ServerMonitor<span className="text-blue-600">+</span>
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-gray-600">
            Your all-in-one iOS solution for server monitoring, Docker management, and SSH terminal access. Keep your servers running smoothly with real-time monitoring and powerful management tools.
          </p>
          <div className="flex gap-4">
            <Link
              href="/support"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Get Support
            </Link>
            <Link
              href="/privacy"
              className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Key Features
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Server Monitoring</h3>
              <p className="text-gray-600">
                Real-time monitoring of CPU, memory, disk usage, and network traffic. Set up custom alerts for critical events.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Docker Management</h3>
              <p className="text-gray-600">
                Manage Docker containers with ease. Start, stop, restart, and monitor container status from your iOS device.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">SSH Terminal</h3>
              <p className="text-gray-600">
                Secure SSH terminal access to your servers. Execute commands and manage your servers on the go.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="overflow-hidden py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
            Beautiful Interface
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Powerful features wrapped in a modern, intuitive design
          </p>

          <div className="relative">
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 flex justify-center">
              <div className="h-[500px] w-[500px] animate-blob rounded-full bg-blue-100 opacity-30 mix-blend-multiply blur-xl filter"></div>
              <div className="animation-delay-2000 h-[500px] w-[500px] animate-blob rounded-full bg-purple-100 opacity-30 mix-blend-multiply blur-xl filter"></div>
              <div className="animation-delay-4000 h-[500px] w-[500px] animate-blob rounded-full bg-pink-100 opacity-30 mix-blend-multiply blur-xl filter"></div>
            </div>

            {/* Screenshots Grid */}
            <div className="relative grid gap-8 md:grid-cols-3">
              {/* Dashboard Screenshot */}
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur transition duration-1000 group-hover:opacity-70"></div>
                <div className="relative flex aspect-[9/19.5] items-center justify-center overflow-hidden rounded-3xl bg-white shadow-lg">
                  <Image
                    src="/screenshots/dashboard.png"
                    alt="Server Dashboard"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100">
                    <p className="text-center text-sm font-medium text-white">
                      Real-time server monitoring dashboard with detailed metrics
                    </p>
                  </div>
                </div>
              </div>

              {/* Docker Screenshot */}
              <div className="group relative mt-12 md:mt-24">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur transition duration-1000 group-hover:opacity-70"></div>
                <div className="relative flex aspect-[9/19.5] items-center justify-center overflow-hidden rounded-3xl bg-white shadow-lg">
                  <Image
                    src="/screenshots/docker.png"
                    alt="Docker Management"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100">
                    <p className="text-center text-sm font-medium text-white">
                      Effortlessly manage Docker containers and view logs
                    </p>
                  </div>
                </div>
              </div>

              {/* Terminal Screenshot */}
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-pink-600 to-blue-600 opacity-30 blur transition duration-1000 group-hover:opacity-70"></div>
                <div className="relative flex aspect-[9/19.5] items-center justify-center overflow-hidden rounded-3xl bg-white shadow-lg">
                  <Image
                    src="/screenshots/terminal.png"
                    alt="SSH Terminal"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100">
                    <p className="text-center text-sm font-medium text-white">
                      Powerful SSH terminal with full server access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
