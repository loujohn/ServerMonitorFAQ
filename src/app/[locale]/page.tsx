import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-gray-600">
            {t("description")}
          </p>
          <div className="flex gap-4">
            <Link
              href={`/${locale}/support`}
              className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              {t("getSupport")}
            </Link>
            <Link
              href={`/${locale}/privacy`}
              className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50"
            >
              {t("privacyPolicy")}
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            {t("features.title")}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {t("features.serverMonitoring.title")}
              </h3>
              <p className="text-gray-600">
                {t("features.serverMonitoring.description")}
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {t("features.dockerManagement.title")}
              </h3>
              <p className="text-gray-600">
                {t("features.dockerManagement.description")}
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {t("features.sshTerminal.title")}
              </h3>
              <p className="text-gray-600">{t("features.sshTerminal.description")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="overflow-hidden py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
            {t("screenshots.title")}
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            {t("screenshots.subtitle")}
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
                      {t("screenshots.dashboard")}
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
                      {t("screenshots.docker")}
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
                      {t("screenshots.terminal")}
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
