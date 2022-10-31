package operations

import (
"openapi/pkg/models/shared")

type RetrieveGiftCardFromGanSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveGiftCardFromGanRequest struct {
    Request shared.RetrieveGiftCardFromGanRequest `request:"mediaType=application/json"`
    Security RetrieveGiftCardFromGanSecurity 
    
}

type RetrieveGiftCardFromGanResponse struct {
    ContentType string 
    RetrieveGiftCardFromGanResponse *shared.RetrieveGiftCardFromGanResponse 
    StatusCode int64 
    
}

