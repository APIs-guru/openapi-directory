package operations

import (
	"openapi/pkg/models/shared"
)

type UnlinkCustomerFromGiftCardPathParams struct {
	GiftCardID string `pathParam:"style=simple,explode=false,name=gift_card_id"`
}

type UnlinkCustomerFromGiftCardSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type UnlinkCustomerFromGiftCardRequest struct {
	PathParams UnlinkCustomerFromGiftCardPathParams
	Request    shared.UnlinkCustomerFromGiftCardRequest `request:"mediaType=application/json"`
	Security   UnlinkCustomerFromGiftCardSecurity
}

type UnlinkCustomerFromGiftCardResponse struct {
	ContentType                        string
	StatusCode                         int64
	UnlinkCustomerFromGiftCardResponse *shared.UnlinkCustomerFromGiftCardResponse
}
