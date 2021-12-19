import { useRouter } from "next/router";
import Link from "next/link";

function ProductDetail() {
  const router = useRouter();
  const pId = router.query.productId;

  return (
      <div>
      <h2><Link href='/products'><a>All Products</a></Link></h2>
        <h1>Looking At product id : {pId}</h1>
      </div>
  );
}
export default ProductDetail;
