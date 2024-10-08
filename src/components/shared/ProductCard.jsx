import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const ProductCard = () => {
  return (
    <Card>
      <img
        className="w-full"
        src="https://www.w3schools.com/w3css/img_lights.jpg"
        alt=""
      />
      <CardContent className="mt-5">
        <Badge variant="secondary">Badge</Badge>
        <CardTitle className="mt-5">Card Title</CardTitle>
        <CardDescription className="mt-2">Card Description</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
