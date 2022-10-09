import styledComponents from "styled-components";

export const ArtCollectionStyles = styledComponents.div`
div.flex__center{
    align-items : flex-start;
    justify-content: space-between; 
}
.heading-container{
    margin-top: 89px 
}
.heading{
    h2{
        font-weight: 700;
        font-size: 48px;
        line-height: 72px;
        letter-spacing: -0.03em;
        color: #FFFFFF;
        margin : 0;
    }
    p{
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.01em;
        color: #FFFFFF;
        margin : 20px 0 94px;
    }
}


.input{
    position: relative;
    img{
    position: absolute;
    top: 27%;
    left: 19px;
    }
}

input{
    background: #1A1405;
    border-radius: 51px;
    height: 66px;
    width: 537px;
    border : none;
      color: #FBAF00;
    padding-left : 63px;
&::placeholder {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #FBAF00;
    // padding-left : 63px;
}
}

.collections{
    display: flex;
    justify-content: space-between; 
    flex-wrap : wrap;
    & > * {
        width : 32%;
        margin-bottom : 66px;
        cursor: pointer;
    }
}


.footer{
    display: flex;
    align-items : center;
    margin-left: -10px;
    .arrow{
     margin-left: 10px;
    }
}

@media(max-width : 768px){
    div.flex__center{
        flex-direction : column;
    }
    .heading {
        h2{
        font-weight: 700;
        font-size: 30px;
        line-height: 133.4%;
        }
        p{
            margin  : 20px 0px;
        }
    }
    .input{
        width: 80%;
        margin-bottom : 40px;
    }
    input{
        width : 100%;
    }
    .collections{

    & > * {
        width : 100%;
        margin-bottom : 36px;
       
    }
  }
    .footer{
     flex-direction : column-reverse;
    
     .footer-line{
        width: 100%;
     }
     
    .arrow{
        margin-left: 10px;
    }
}

}
`;
