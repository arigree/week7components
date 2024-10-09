const data = [
  {
    title: "Pic 1",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 1",
  },
  {
    title: "Pic 2",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 2",
  },
  {
    title: "Pic 3",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 3",
  },
  {
    title: "Pic 4",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 4",
  },
  {
    title: "Pic 5",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 5",
  },
  {
    title: "Pic 6",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 6",
  },
  {
    title: "Pic 7",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 7",
  },
  {
    title: "Pic 8",
    imageUrl: "https://picsum.photos/300/300",
    description: "Blah 1",
  },
];

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <div>
        <img src={data[0].imageUrl} width={100} height={100} />

        <div>
          <h4>Title</h4>
          <p>Lorem</p>
        </div>
      </div>
    </main>
  );
}
