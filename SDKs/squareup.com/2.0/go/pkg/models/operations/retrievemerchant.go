package operations

import (
"openapi/pkg/models/shared")

type RetrieveMerchantPathParams struct {
    MerchantID string `pathParam:"style=simple,explode=false,name=merchant_id"`
    
}

type RetrieveMerchantSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveMerchantRequest struct {
    PathParams RetrieveMerchantPathParams 
    Security RetrieveMerchantSecurity 
    
}

type RetrieveMerchantResponse struct {
    ContentType string 
    RetrieveMerchantResponse *shared.RetrieveMerchantResponse 
    StatusCode int64 
    
}

