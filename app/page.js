import Content from "./components/Content/Content";
import PopularPosts from "./components/PopularPosts/PopularPosts";


export default function Home() {
  return (
    <div className="flex flex-col gap-8 px-6 py-4">
      <PopularPosts />
      <Content />
    </div>
  )
}
