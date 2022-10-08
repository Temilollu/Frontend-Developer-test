import styledComponents from "styled-components";

export const SingleArtStyles = styledComponents.div`
    padding: 0px 48px;
.icons{
    display: flex;
    justify-content : space-between;
    align-items: center;
    width : 100%;
    margin-top : 80px;
    .arrow{
        cursor: pointer;
    }
}

.content{
    display: flex;
    justify-content : space-between;
    align-items: flex-start;
    margin-top : 70px;
    gap : 54px;
    .frame{
        flex: 0.7;
        width: 465px;
        margin-left : 72px;
        height: 617px;
        border-radius: 200px 20px;
    }
    .more{
        flex : 1;
     h2{
        font-weight: 800;
        font-size: 32px;
        line-height: 50px;
        letter-spacing: -0.01em;
        margin : 0;
     }    
     p{
        margin : 20px  130px 20px 0;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.01em;
     }
    }
}

.cta{
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    .secondary{
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.01em;
        margin-left: 31px;
    }

    img{
        margin-right: -48px;
    }
}

@media(max-width : 768px){
    padding : 0 21px;
    .icons{
          margin-top : 40px;
    }
    .content{
        flex-direction : column-reverse;
        .more{
            h2{
            font-weight: 800;
            font-size: 32px;
            line-height: 133.4%;
        }
        }
        .frame{
            width: 100%;
            margin-left: 0;
            flex: auto;
        }
    }
    .cta{
     
        img{
       
            display: none;
           
        }
    }
}
`;
