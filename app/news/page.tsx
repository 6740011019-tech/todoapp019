import Link from "next/link";
const NewsPage = () => {
  const newsList = [
    { id: 1, title: "News One" },
    { id: 2, title: "News Two" },
    { id: 3, title: "News Three" },
  ];
  return (
    <div>
      <h1>News Page</h1>
      <ul>
        {newsList.map((news) => (
          <li key={news.id}>
           
            <Link href={`/news/${news.id}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NewsPage;