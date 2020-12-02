import {createSelector} from "reselect";

export const selectShop = state => state.shop;

export const selectShopCollection = createSelector (
    [selectShop],
    shop => shop.collection
);
export const selectShopCollectionForPreview = createSelector (
    [selectShopCollection],
    collection => collection ? Object.keys(collection).map(key  =>collection[key]) : []
)



export const selectCollection = collectionUrlParam =>
  createSelector(
      [selectShopCollection],
      collection => (collection ? collection[collectionUrlParam] : null)

  );