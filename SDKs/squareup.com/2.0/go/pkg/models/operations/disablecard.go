package operations

import (
"openapi/pkg/models/shared")

type DisableCardPathParams struct {
    CardID string `pathParam:"style=simple,explode=false,name=card_id"`
    
}

type DisableCardSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DisableCardRequest struct {
    PathParams DisableCardPathParams 
    Security DisableCardSecurity 
    
}

type DisableCardResponse struct {
    ContentType string 
    DisableCardResponse *shared.DisableCardResponse 
    StatusCode int64 
    
}

