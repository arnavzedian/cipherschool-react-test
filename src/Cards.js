import styled from "styled-components";
import Card from "./Card";
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100vw;
  height: 100vh;
  gap: 25px;
  padding: 25px;
  justify-content: center;
  align-items: center;
`;

export default function Cards() {
  return (
    <MainContainer>
      <Card
        image={"/1.jpg"}
        title={"White Traditional Long Dress"}
        oldPrice={"$5.99"}
        newPrice={"3.99"}
        color1={"grey"}
        color2={"red"}
        color3={"blue"}
        rating={"4.8"}
        couponName={"Monday Happy"}
        couponCode={"#MONHPY"}
        discount={"20%"}
      />
      <Card
        image={"/1.jpg"}
        title={"White Traditional Long Dress"}
        oldPrice={"$5.99"}
        newPrice={"3.99"}
        color1={"grey"}
        color2={"red"}
        color3={"blue"}
        rating={"4.8"}
        couponName={"Monday Happy"}
        couponCode={"#MONHPY"}
        discount={"20%"}
      />
      <Card
        image={"/1.jpg"}
        title={"White Traditional Long Dress"}
        oldPrice={"$5.99"}
        newPrice={"3.99"}
        color1={"grey"}
        color2={"red"}
        color3={"blue"}
        rating={"4.8"}
        couponName={"Monday Happy"}
        couponCode={"#MONHPY"}
        discount={"20%"}
      />
      <Card
        image={"/1.jpg"}
        title={"White Traditional Long Dress"}
        oldPrice={"$5.99"}
        newPrice={"3.99"}
        color1={"grey"}
        color2={"red"}
        color3={"blue"}
        rating={"4.8"}
        couponName={"Monday Happy"}
        couponCode={"#MONHPY"}
        discount={"20%"}
      />
    </MainContainer>
  );
}
