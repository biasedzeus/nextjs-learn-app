import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const pId = router.query.productId;

  return <h1>Product details :{pId}</h1>;
}
export default ProductDetail;
