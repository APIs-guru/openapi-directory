package operations

import (
	"openapi/pkg/models/shared"
)

type PostConversationsIDOfferPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostConversationsIDOfferRequestBody struct {
	Message       *string `json:"message"`
	Price         string  `json:"price"`
	ShippingPrice *string `json:"shipping_price"`
}

type PostConversationsIDOfferSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostConversationsIDOfferRequest struct {
	PathParams PostConversationsIDOfferPathParams
	Request    *PostConversationsIDOfferRequestBody `request:"mediaType=application/json"`
	Security   PostConversationsIDOfferSecurity
}

type PostConversationsIDOfferResponse struct {
	ContentType string
	StatusCode  int64
}
