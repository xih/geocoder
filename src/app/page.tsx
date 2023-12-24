import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <main className="container mt-5 flex flex-col	items-start gap-1">
      {/* <Button className="flex" variant="ghost">
        Link
      </Button> */}
      <Link className="cursor-pointer hover:underline" href={"/map"}>
        Maplibre dark mode
      </Link>{" "}
      <Link className="cursor-pointer hover:underline" href={"/mapbox1"}>
        Mapbox w geocoder
      </Link>
    </main>
  );
}

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
