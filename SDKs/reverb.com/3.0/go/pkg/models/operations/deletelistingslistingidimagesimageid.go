package operations

import (
"openapi/pkg/models/shared")

type DeleteListingsListingIDImagesImageIDPathParams struct {
    ImageID string `pathParam:"style=simple,explode=false,name=image_id"`
    ListingID string `pathParam:"style=simple,explode=false,name=listing_id"`
    
}

type DeleteListingsListingIDImagesImageIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteListingsListingIDImagesImageIDRequest struct {
    PathParams DeleteListingsListingIDImagesImageIDPathParams 
    Security DeleteListingsListingIDImagesImageIDSecurity 
    
}

type DeleteListingsListingIDImagesImageIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

