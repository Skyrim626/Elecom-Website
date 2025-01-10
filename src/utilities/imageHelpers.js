// Import images
import emptyLogoImage from "../assets/images/organizations/templates/empty-logo-image.png";
import emptyProductImage from "../assets/images/merchandises/product-image-150.png";

export const getLogoImage = (logoImageURL) => {
  // console.log(`${import.meta.env.VITE_API_BASE_URL}${logoImageURL}`)
  if(logoImageURL) {
    return `${import.meta.env.VITE_API_BASE_URL}${logoImageURL}`
  }

  return emptyLogoImage;
}

export const getMerchandiseImage = (merchandiseImageUrl) => {

  // console.log(merchandiseImageUrl);

  if(merchandiseImageUrl) {
    return `${import.meta.env.VITE_API_BASE_URL}${merchandiseImageUrl}`
  }

  return emptyProductImage;
}