package operations

import (
"openapi/pkg/models/shared")

type GetMyViewedListingsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyViewedListingsRequest struct {
    Security GetMyViewedListingsSecurity 
    
}

type GetMyViewedListingsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

