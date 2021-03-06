import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collection-overview.style.scss';

const collectionOverview = ({ collections }) =>(
    <div className="collection-overview">
        {collections.map(({id, ...otherCollectionProp}) => (
            <CollectionPreview key={id} {...otherCollectionProp} />
        )
        )}
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(collectionOverview);
