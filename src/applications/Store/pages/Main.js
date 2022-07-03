import Layout from "../components/layout/Layout";
import StoreList from "../components/store/StoreList";

// TODO CREATE HOOK TO API
const DUMMYDATA_ITEMS = {
  store1: {
    name: "House Goods",
    description: "We provide all kinds of equipment for your home",
    items: [
      {
        1: {
          name: "Magical Broom",
          description:
            "A broom is a cleaning tool consisting of usually stiff fibers attached to, and roughly parallel to, a cylindrical handle, the broomstick.",
          images: [
            "https://lh3.googleusercontent.com/d/1mNiS3ywkMVKGbsCT1ibbolgXRYh_-QI_",
          ],
          price: 4.99,
        },
      },
      {
        2: {
          name: "Magical Bucket",
          description:
            "A bucket is a container with a wide open top and a handle that is mainly used for carrying liquids. In some cases, solids may also be carried in a bucket (like sand which is hard to carry in your hands).",
          images: [
            "https://lh3.googleusercontent.com/d/1ET2sFVicyvvSl_z-_wPqF779GXQirHYO",
            "https://lh3.googleusercontent.com/d/1GVxtHf_OKMjoHOUL_vxhah5rpS6xid3R",
            "https://lh3.googleusercontent.com/d/1yZo1Ep4SilRWHStgCegpmcVV5lOfLMRs",
          ],
          price: 4.99,
        },
      },
      {
        3: {
          name: "Magical Mop",
          description:
            "A mop (such as a floor mop) is a mass or bundle of coarse strings or yarn, etc., or a piece of cloth, sponge or other absorbent material, attached to a pole or stick. It is used to soak up liquid, for cleaning floors and other surfaces, to mop up dust, or for other cleaning purposes.",
          images: [
            "https://lh3.googleusercontent.com/d/1f0tWGifTnwoI-BLhp5Ys4NwiwnZu6fcA",
          ],
          price: 4.99,
        },
      },
      {
        4: {
          name: "Wizarding Cast Iron Pan",
          description:
            "Cast-iron cookware is slow to heat, but once at temperature provides even heating. Cast iron can also withstand very high temperatures, making cast iron pans ideal for searing. Being a reactive material, cast iron can have chemical reactions with high acid foods such as wine or tomatoes. In addition, some foods (such as spinach) cooked on bare cast iron will turn black.",
          images: [
            "https://lh3.googleusercontent.com/d/1eRwSakngKyc2dM1W8pk7wn97Il0nHXMU",
            "https://lh3.googleusercontent.com/d/17YG-tBa6KoKAakgJhF2aZv6CK3vFPSn2",
            "https://lh3.googleusercontent.com/d/1h6Ojou_dJaH7nFIBPFissX-SVRdQlaBZ",
          ],
          price: 29.99,
        },
      },
      {
        5: {
          name: "Wizarding Wok",
          description:
            "A wok is a deep round-bottomed cooking pot that originated in China. It is common in China and similar pans are found in parts of East, South and Southeast Asia, as well as being popular in other parts of the world.",
          images: [
            "https://lh3.googleusercontent.com/d/1BSNBkJeLdiw-pcBOS2KrY6YeFnfCZRWT",
            "https://lh3.googleusercontent.com/d/1_vIuqYwY0CwL_fxlwneMxtWR_yFyLcUO",
          ],
          price: 19.99,
        },
      },
      {
        6: {
          name: "Wizarding Plastic Spatula",
          description:
            'A spatula is a broad, flat, flexible blade used to mix, spread and lift material including foods, drugs, plaster and paints. In medical applications, "spatula" may also be used synonymously with tongue depressor.',
          images: [
            "https://lh3.googleusercontent.com/d/1_-W37XRokXesXrJcDdgwKQNNiart4apH",
            "https://lh3.googleusercontent.com/d/1ZMGgF9rcOM0hUQJvH-s2WSHKlWcSb6yB",
            "https://lh3.googleusercontent.com/d/13M0CwdFbeqveFm47rHe49E4uZZLnyBqm",
          ],
          price: 4.99,
        },
      },
    ],
  },
  store2: {
    name: "House Goods 2",
    description: "We provide all kinds of equipment for your home",
    items: [
      {
        7: {
          name: "Magical Broom",
          description:
            "A broom is a cleaning tool consisting of usually stiff fibers attached to, and roughly parallel to, a cylindrical handle, the broomstick.",
          images: [
            "https://lh3.googleusercontent.com/d/1mNiS3ywkMVKGbsCT1ibbolgXRYh_-QI_",
          ],
          price: 5.99,
        },
      },
      {
        8: {
          name: "Magical Bucket",
          description:
            "A bucket is a container with a wide open top and a handle that is mainly used for carrying liquids. In some cases, solids may also be carried in a bucket (like sand which is hard to carry in your hands).",
          images: [
            "https://lh3.googleusercontent.com/d/1ET2sFVicyvvSl_z-_wPqF779GXQirHYO",
            "https://lh3.googleusercontent.com/d/1GVxtHf_OKMjoHOUL_vxhah5rpS6xid3R",
            "https://lh3.googleusercontent.com/d/1yZo1Ep4SilRWHStgCegpmcVV5lOfLMRs",
          ],
          price: 5.99,
        },
      },
    ],
  },
};

function MainPage() {
  return (
    <Layout>
      <StoreList stores={DUMMYDATA_ITEMS} />
    </Layout>
  );
}

export default MainPage;
