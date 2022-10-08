import React from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";

const CollectionCard = ({ collection }) => {
  const navigate = useNavigate();
  return (
    <CollectionCard.Wrapper onClick={() => navigate(`/art/${collection?.id}`)}>
      <img
        src={collection?.thumbnail?.lqip}
        alt={collection?.thumbnail?.alt_text}
      />
      <div className="bottom">
        <h3 className="title">{collection?.title}</h3>
        <div className="date">{collection?.date_display}</div>
        <div className="location">{collection?.place_of_origin}</div>
      </div>
    </CollectionCard.Wrapper>
  );
};

export default CollectionCard;

CollectionCard.Wrapper = styledComponents.div`

img{
width: 100%;
height: 326px;
border-radius: 180px 0px  0px 0px;
}
.title{
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.01em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin : 0;
}
.bottom{
background: #1A1405;
border-radius: 0px  0px 180px 0;
padding : 28px 0 47px 22px;

margin-top: -4px;
}
.location{
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
    letter-spacing: -0.01em;
    color: #FFFFFF;
}
.date{
    letter-spacing: -0.01em;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    margin : 31px 0 7px;
    color: #FFFFFF;
}
`;
