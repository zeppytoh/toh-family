interface NewsItem {
  date: string;
  description: string;
}

interface NewsProps {
  news: NewsItem[];
}

const News = ({ news }: NewsProps) => {
  return (
    <div className="bg-yellow-400 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">News</h2>
        {news.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-lg font-bold">{item.date}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
