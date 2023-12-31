import Container from '@/components/ui/container';
import Tab from './components/tab';
import Info from './components/info';
import Description from './components/description';
import Related from './components/related';
import getProducts from '@/actions/getProducts';
import { Product } from '@/type';
import { Separator } from '@/components/ui/separator';

const ProductPage = async ({
   params: { productId },
}: {
   params: { productId: string };
}) => {
   const products = await getProducts();
   const product = products.find(
      (product) => product.id === productId,
   ) as Product;

   return (
      <Container className="mx-5 md:mx-14">
         <div className="flex flex-col gap-8">
            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               {product ? (
                  <>
                     <Tab images={product?.images} />
                     <Info product={product} />
                  </>
               ) : (
                  <></>
               )}
            </div>
            <Description />
            <Related
               category={product.category}
               productId={productId}
            />
            <Separator />
         </div>
      </Container>
   );
};
export default ProductPage;
