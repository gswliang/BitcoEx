import {
  ProductContainer,
  HeaderContainer,
  HeaderStripe,
  HeaderH1,
  HeaderP,
  BitcoProContainter,
  BitcoEXContainter,
  PhoneImg,
  LogoImg,
  ProContainer,
  MainProduct,
  ProdctDtl,
  Detail,
} from "./ProductElements";
import { Button } from "../../Components/Button";
import darkPhone from "../../IMG/dark_iphone.png";
import lightPhone from "../../IMG/light_iphone.png";
import shiba from "../../IMG/shiba.jpg";
import samoye from "../../IMG/samoye.jpg";

const Product = () => {
  const header = "我們的產品";
  const headerP = "Products";
  const mainProduct = "BitcoPro";
  const productDetail = "數位資產交易平台";
  const details = [
    "全台最大單日 3 億台幣交易量",
    "提供 20 種幣種、39 個交易對",
    "榮獲 2019 台灣 TOP 10 金融科技新創事業",
    "全球首創 「TTCheck」機制",
  ];

  const exMainProduct = "BitcoEx";
  const exProductDetail = "虛擬貨幣錢包買賣平台";
  const exDetails = [
    "比特幣電子錢包台灣佔有率 No.1",
    "全球比特幣電子錢包交易量 TOP 5",
    "2017 榮獲矽谷 CIO 支付解決方案 TOP 10",
    "服務涵蓋全台超商通路超過 3,000 家",
  ];

  const ProRenderDetail = details.map((detail, i) => (
    <Detail key={i}>{detail}</Detail>
  ));
  const ExRenderDetail = exDetails.map((detail, i) => (
    <Detail key={i}>{detail}</Detail>
  ));

  return (
    <>
      <ProductContainer>
        <HeaderContainer>
          <HeaderStripe />
          <HeaderH1>{header}</HeaderH1>
          <HeaderP>{headerP}</HeaderP>
        </HeaderContainer>
        <BitcoProContainter>
          <PhoneImg src={darkPhone} alt="dark_phone" />
          <ProContainer>
            <LogoImg src={shiba} alt="shiba_cute" />
            <MainProduct>{mainProduct}</MainProduct>
            <ProdctDtl>{productDetail}</ProdctDtl>
            {ProRenderDetail}
            <Button>前往交易</Button>
          </ProContainer>
        </BitcoProContainter>
        <BitcoEXContainter>
          <PhoneImg src={lightPhone} alt="light_phone" />
          <ProContainer>
            <LogoImg src={samoye} alt="samoye_cute" />
            <MainProduct>{exMainProduct}</MainProduct>
            <ProdctDtl>{exProductDetail}</ProdctDtl>
            {ExRenderDetail}
            <Button>立即體驗</Button>
          </ProContainer>
        </BitcoEXContainter>
      </ProductContainer>
    </>
  );
};

export default Product;
