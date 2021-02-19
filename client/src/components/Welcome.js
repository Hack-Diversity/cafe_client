/* eslint-disable semi */
import React from 'react';
import banner from '../styles/assets/coffee.jpg';
import library from '../styles/assets/library.jpg';
import book from '../styles/assets/book.jpg';
import menu from '../styles/assets/menu.jpg';
import styled from 'styled-components';

const PgrContainer = styled.div`
  margin-top: 60px;
`

const Paragraphs = styled.p`
  font-size: 20px;

  margin: 20px 100px 20px 400px;
  position: relative;
  text-align: justify;
`

const GrayBar = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 150px;

`

const Title = styled.h1`
  font-size: 50px;
  float: left;
  position: absolute;
  margin-left: 100px;
  margin-top: -60px;

`

const InfoDiv = styled.div.attrs({
    className: 'InfoDiv',
})`
    margin-left:auto;
    margin-right:auto;
    width:1000px;
    height:100%;
    float:left;
`;

const Info = styled.div.attrs({
    className: 'Info',
})`
    padding-top:20px;
    font-size:20px;
`;

const LeftColumn = styled.div.attrs({
    className: 'LeftColumn',
})`
    height:100%;
    width:500px;
    float:left;
    margin-left:auto;
    padding-left:200px;
`;

const RightColumn = styled.div.attrs({
    className: 'RightColumn',
})`
    height:100%;
    width:500px;
    float:left;
    padding-right:200px;
`;


const Welcome = () =>
    <div className="welcome--container">
    <img src = {banner} style = {{ marginTop: '-20px', width: '100%' }} alt = 'banner'/>
    <GrayBar></GrayBar>
        <Title className="welcome--message-text">ABOUT US</Title>
        <img src={library}
          style={{
            float: 'left',
            marginLeft: '105px'
          }} alt = 'Historical Library'/>
        <PgrContainer>
        <Paragraphs className="welcome--description-text"> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam pretium vel lectus sit amet
          feugiat. Nulla vitae placerat erat. Donec fringilla venenatis est,
          at iaculis ante malesuada id. Nullam viverra ullamcorper rhoncus.
          Etiam rhoncus, nisl vel condimentum semper, sem tellus suscipit ante,
          in laoreet felis ante non enim. Nullam et dictum tellus, vitae ultrices
          ipsum. Nam iaculis posuere leo, at commodo nibh vestibulum ac. Nulla
          placerat nunc in risus venenatis, id pharetra sapien consectetur. Nam
          tristique, enim id ullamcorper mattis, nulla neque molestie urna, quis
          posuere sapien dui elementum enim. Duis dictum quis urna a dictum.
          Donec iaculis, turpis eu vehicula fermentum, mauris odio elementum
          tortor, non feugiat dolor enim quis diam.</Paragraphs>

          <Paragraphs>Nulla euismod sem vitae augue aliquet, ut iaculis libero tempus.
            Integer et metus eget arcu placerat imperdiet a quis eros. Donec at
            diam eros. Vivamus eu suscipit sapien. Vivamus et hendrerit urna.
            Duis vitae ligula euismod, iaculis eros varius, venenatis magna.
            Nunc aliquam, libero in lacinia pulvinar, tellus leo accumsan lacus,
            eu accumsan nunc ipsum id lacus. Curabitur massa erat, luctus vel
            aliquet quis, porta et lectus. Suspendisse potenti. Curabitur
            bibendum feugiat ante in lobortis. Integer at cursus felis. Sed in
            nisi efficitur, malesuada mauris vel, malesuada nibh. Fusce lacinia
            libero at est aliquet ornare. Nulla facilisi. Etiam vel tellus
            pretium, laoreet ligula eget, placerat nibh.</Paragraphs>

            <Paragraphs>Integer non cursus sapien. Duis dapibus volutpat metus ac
              iaculis. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec eleifend nisi in diam
              vestibulum, id eleifend metus tempus. Ut et urna sodales nisi
              scelerisque suscipit. Nulla facilisi. Ut feugiat eget massa sit
              amet aliquam. Etiam egestas egestas tellus vel tincidunt.</Paragraphs>
          </PgrContainer>

            <img src={book}
              style={{
                width: '100%'
              }} alt = 'Book'/>
          <GrayBar></GrayBar>
          <Title className="welcome--message-text">MENU</Title>
            <img src={menu}
              style={{
                marginTop: '100px',
                marginBottom: '100px'
              }} alt = 'Menu'/>
              <GrayBar></GrayBar>

              <Title className="welcome--message-text">CONTACT US</Title>

                <Paragraphs>Call Us:</Paragraphs>
                <Paragraphs>(123)456-7890</Paragraphs>
                <Paragraphs>Located:</Paragraphs>
                <Paragraphs>123 SomeFake St, Ghost Town, NS 00700</Paragraphs>


              <GrayBar></GrayBar>
    </div>

export default Welcome;
