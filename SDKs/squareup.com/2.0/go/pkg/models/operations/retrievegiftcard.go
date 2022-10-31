package operations

import (
"openapi/pkg/models/shared")

type RetrieveGiftCardPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type RetrieveGiftCardSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveGiftCardRequest struct {
    PathParams RetrieveGiftCardPathParams 
    Security RetrieveGiftCardSecurity 
    
}

type RetrieveGiftCardResponse struct {
    ContentType string 
    RetrieveGiftCardResponse *shared.RetrieveGiftCardResponse 
    StatusCode int64 
    
}

