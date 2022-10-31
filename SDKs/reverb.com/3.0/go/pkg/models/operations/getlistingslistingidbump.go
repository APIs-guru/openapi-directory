package operations

import (
"openapi/pkg/models/shared")

type GetListingsListingIDBumpPathParams struct {
    ListingID string `pathParam:"style=simple,explode=false,name=listing_id"`
    
}

type GetListingsListingIDBumpSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetListingsListingIDBumpRequest struct {
    PathParams GetListingsListingIDBumpPathParams 
    Security GetListingsListingIDBumpSecurity 
    
}

type GetListingsListingIDBumpResponse struct {
    ContentType string 
    StatusCode int64 
    
}

