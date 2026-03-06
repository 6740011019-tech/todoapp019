
"use client";
import { useEffect, useState } from "react";

interface FooProps {
  x: number;
}

const Foo = ({x} : FooProps) => {
  useEffect(() => {
    console.log(x)
    return () => console.log("Bye");//unmounting
  }, [x]);
  return <div>Foo</div>
};

const IndexPage = () => {
  const [x, setX] = useState(1);
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <button className="bg-red-700 rounded-xl p-2 m-2"onClick={()=>{setIsShow(!isShow)}}>Toggle</button>
      <button className="bg-amber-600 rounded-xl p-2 m-2"onClick={()=>{setX(+new Date())}}>Change X</button>
      {isShow && <Foo x={x}></Foo>}
    </div>
  );
};
export default IndexPage;

//mounted
//updated
//unmounting