import Link from "next/link";

export default function ProductHunt() {
  return (
    <Link
      className="flex flex-row items-center text-sm gap-2 rounded-2xl hover:shadow-white/75 shadow-lg transition ease-in-out md:outline md:outline-transparent md:hover:outline-white md:hover:scale-105 md:active:scale-95 font-semibold tracking-tighter"
      href="https://www.producthunt.com/posts/chroma-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chroma&#0045;ai"
      target="_blank"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385012&theme=dark"
        alt="Chroma&#0032;AI - Generate&#0032;gradients&#0032;based&#0032;on&#0032;your&#0032;mood&#0032;using&#0032;AI | Product Hunt"
        className="w-full h-auto"
      />
    </Link>
  );
}
