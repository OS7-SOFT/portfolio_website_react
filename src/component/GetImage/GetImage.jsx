import { useState, useEffect } from "react";

const GetImage = (props) => {
  const [imageUrl, SetImageUrl] = useState(null);

  useEffect(() => {
    import(`../../images/${props.image}`).then((img) => {
      SetImageUrl(img.default);
    });
  }, [props.image]);

  if (!imageUrl) {
    return <div>Loading....</div>;
  }

  return <img src={imageUrl} alt="images" className={props.className} />;
};

export default GetImage;
