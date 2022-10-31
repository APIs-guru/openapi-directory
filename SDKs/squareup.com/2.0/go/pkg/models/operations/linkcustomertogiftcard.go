package operations

import (
"openapi/pkg/models/shared")

type LinkCustomerToGiftCardPathParams struct {
    GiftCardID string `pathParam:"style=simple,explode=false,name=gift_card_id"`
    
}

type LinkCustomerToGiftCardSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type LinkCustomerToGiftCardRequest struct {
    PathParams LinkCustomerToGiftCardPathParams 
    Request shared.LinkCustomerToGiftCardRequest `request:"mediaType=application/json"`
    Security LinkCustomerToGiftCardSecurity 
    
}

type LinkCustomerToGiftCardResponse struct {
    ContentType string 
    LinkCustomerToGiftCardResponse *shared.LinkCustomerToGiftCardResponse 
    StatusCode int64 
    
}

