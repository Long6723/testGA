"use client";

import Link from "next/link";

export default function PageT2() {
  const handleClick = async () => {
    console.log("Hello from Page 2");

    try {
      if ((window as any)?.gtag) {
        await (window as any)?.gtag("event", "add_to_cart", {
          currency: "USD",
          value: 30.03,
          items: [
            {
              item_id: "SKU_12345",
              item_name: "Stan and Friends Tee",
              affiliation: "Google Merchandise Store",
              coupon: "SUMMER_FUN",
              discount: 2.22,
              index: 0,
              item_brand: "Google",
              item_category: "Apparel",
              item_category2: "Adult",
              item_category3: "Shirts",
              item_category4: "Crew",
              item_category5: "Short sleeve",
              item_list_id: "related_products",
              item_list_name: "Related Products",
              item_variant: "green",
              location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
              price: 10.01,
              quantity: 3,
            },
          ],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome to Page 2</h1>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <Link href="/page1">Go to Page 1</Link>
    </div>
  );
}
