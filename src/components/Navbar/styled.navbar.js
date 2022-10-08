import styledComponents from "styled-components";

export const NavbarStyles = styledComponents.nav`
display: flex;
justify-content: space-between;
align-items : center;
padding : 21px 48px;

img{
    cursor: pointer;
}

ul{
    display: flex;
    justify-content: space-between;
    align-items : center;
    margin: 0;
    gap : 29px;
        li{
        font-style: normal;
        list-style : none;
        font-weight: 600;
        font-size: 16px;
        line-height: 30px;
        letter-spacing: -0.01em;
        color: #FFFFFF;
        cursor: pointer;
        }
}
  .logo-heading-mobile{
       display: none;
  }
@media(max-width : 768px){
    padding : 21px 21px;
    .logo{
        display: none;
    }
    .logo-heading-mobile{
        display: flex;
        justify-content: space-between;
        align-items : center;
        width: 100%;
    }
    .ham{
         width: 30px;
        height: 30px;
    }
    .close{
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }
    .links{
        display: none;
    }
    .links-mobile{
        position: absolute;
        padding: 32px;
        top: 0px;
        left: 0px;
        background: #110c00;
        min-height: 480px;
        width: 100%;
        z-index: 30;
        height: 100vh;
    }
    ul{
        flex-direction : column;
        justify-content: normal;
        align-items : flex-start;
    }
}
`;
