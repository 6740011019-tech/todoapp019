import Image from "next/image";

async function getProducts() {
  const res = await fetch(
    "https://fakestoreapi.com/products?limit=3",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>

      <div className="grid grid-cols-3 gap-6">
        {products.map((item: any) => (
          <div key={item.id} className="border p-4 rounded-lg text-center">
            <Image
              src={item.image}
              alt={item.title}
              width={150}
              height={150}
              className="mx-auto object-contain"
            />
            <h2 className="text-sm mt-2 line-clamp-2">{item.title}</h2>
            <p className="font-bold text-blue-600">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}