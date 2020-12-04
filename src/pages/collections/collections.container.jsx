import {connect} from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selector";
import CollectionsPage from "./collections.component";
import {compose} from "redux";

const mapsStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});


const CollectionsContainer = compose (
    connect(mapsStateToProps),
    WithSpinner)(CollectionsPage);

export default CollectionsContainer;
