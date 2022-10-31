package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveGiftCardFromNonceSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveGiftCardFromNonceRequest struct {
	Request  shared.RetrieveGiftCardFromNonceRequest `request:"mediaType=application/json"`
	Security RetrieveGiftCardFromNonceSecurity
}

type RetrieveGiftCardFromNonceResponse struct {
	ContentType                       string
	RetrieveGiftCardFromNonceResponse *shared.RetrieveGiftCardFromNonceResponse
	StatusCode                        int64
}
