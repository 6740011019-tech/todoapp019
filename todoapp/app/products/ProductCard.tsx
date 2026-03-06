import Image from "next/image";

interface ProductItem{
    id: number;
    title: string;
    price: number;
    image: string
}

interface ProductProps{
    product : ProductItem
}

const ProductCard = ({product} : ProductProps ) => {
  return (
    <>
      <div className="flex flex-col items-center border-2 border-gray-300 p-3 mt-4">
        <div className="flex flex-col items-center">
          <Image
            src={product.image}
            alt="product"
            width={100}
            height={200}
          ></Image>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-xs font-bold mt-2">{product.title}</h2>
          <div className="flex gap-2 items-end">
            <h2 className="text-xs font-bold text-purple-500">{product.price}</h2>
            <button className="text-xs rounded-2xl bg-purple-500 p-1">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;