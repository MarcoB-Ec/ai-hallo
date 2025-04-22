import Link from "next/link";

import { api, HydrateClient } from "@ai-hallo/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">{hello.greeting}</h1>
        <Link href="/articles" className="text-blue-500 hover:underline">
          Go to articles
        </Link>
      </main>
    </HydrateClient>
  );
}
