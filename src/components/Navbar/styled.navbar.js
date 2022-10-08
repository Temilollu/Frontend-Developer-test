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
`;
