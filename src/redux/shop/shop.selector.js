import {createSelector} from "reselect";

const collectionIdMap={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
};


export const selectShop = state => state.shop;

export const selectShopCollection = createSelector (
    [selectShop],
    shop => shop.collection
);

export const selectCollection = collectionUrlParam =>
  createSelector(
      [selectShopCollection],
      collection => collection.find(collection => collection.id === collectionIdMap[collectionUrlParam])
  )



