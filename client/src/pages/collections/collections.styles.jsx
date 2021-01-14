import styled from "styled-components";


const CollectionsPageStyled = styled.div`
    display: flex;
    flex-direction: column;
  
    .title {
      font-size: 38px;
      margin: 0 auto 30px;
      text-transform: uppercase;
    
    }
  
    .items {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
  
      & .collection-item {
        margin-bottom: 30px;
      }
    }
`;

export default CollectionsPageStyled;