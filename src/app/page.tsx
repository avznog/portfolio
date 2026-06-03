import { BentoGrid } from "@/components/bento/BentoGrid";

export default function Home() {
  return (
    <main
      id="main"
      className="flex flex-1 flex-col px-4 py-6 sm:px-6 sm:py-8 lg:min-h-0 lg:overflow-hidden"
    >
      <BentoGrid />
    </main>
  );
}
