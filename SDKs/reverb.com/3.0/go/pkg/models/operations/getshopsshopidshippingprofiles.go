package operations

import (
"openapi/pkg/models/shared")

type GetShopsShopIDShippingProfilesPathParams struct {
    ShopID string `pathParam:"style=simple,explode=false,name=shop_id"`
    
}

type GetShopsShopIDShippingProfilesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetShopsShopIDShippingProfilesRequest struct {
    PathParams GetShopsShopIDShippingProfilesPathParams 
    Security GetShopsShopIDShippingProfilesSecurity 
    
}

type GetShopsShopIDShippingProfilesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

