import page_en_1 from "./page_en_1.png";
import page_en_2 from "./page_en_2.png";
import page_en_3 from "./page_en_3.png";
import bg_page from "./bg_page.png";
import HelpSupport from "./Help&Support.png";
import project_logo from "./bootsplash_logo.png";
import icon_logo from "./icon_logo.png";
import company_logo from "./company_logo.jpeg";

const Images = {
  page_en_1,
  page_en_2,
  page_en_3,
  bg_page,
  project_logo,
  HelpSupport,
  icon_logo,
  company_logo,
};

export type ImagesType = keyof typeof Images;

export { Images };
