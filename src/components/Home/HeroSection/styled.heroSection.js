import styledComponents from "styled-components";

export const HeroSectionStyles = styledComponents.div`
display: flex;
justify-content : space-between;
gap : 120px;
padding : 21px 0 21px 48px ;
margin-top : 90px;

.content{
  h1{
    font-weight: 700;
    font-size: 68px;
    line-height: 72px;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    margin : 0;
    span{
       color  : #FBAF00; 
    }
  }

  p{
    margin : 45px 0 67.88px; 
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;  
    letter-spacing: -0.01em;
  
  }
  .star{
    margin-top : 26px;
    text-align : right;
    margin-right: 11%;
  }
}


@media(max-width : 768px){
  flex-direction: column;
  gap : 60px;
  padding : 21px;
  margin-top : 30px;
  .content{
    h1{
    font-weight: 700;
    font-size: 30px;
    line-height: 133.4%;
    }
  }
  .img-container{
  width : 100%;
    img{
      width : 100%;
    }
  }
}
`;
