package operations

import (
"openapi/pkg/models/shared")

type GetListingsListingIDImagesPathParams struct {
    ListingID string `pathParam:"style=simple,explode=false,name=listing_id"`
    
}

type GetListingsListingIDImagesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetListingsListingIDImagesRequest struct {
    PathParams GetListingsListingIDImagesPathParams 
    Security GetListingsListingIDImagesSecurity 
    
}

type GetListingsListingIDImagesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

