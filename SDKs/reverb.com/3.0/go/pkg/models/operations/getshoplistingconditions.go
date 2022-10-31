package operations

import (
"openapi/pkg/models/shared")

type GetShopListingConditionsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetShopListingConditionsRequest struct {
    Security GetShopListingConditionsSecurity 
    
}

type GetShopListingConditionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

