package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGiftCardSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateGiftCardRequest struct {
	Request  shared.CreateGiftCardRequest `request:"mediaType=application/json"`
	Security CreateGiftCardSecurity
}

type CreateGiftCardResponse struct {
	ContentType            string
	CreateGiftCardResponse *shared.CreateGiftCardResponse
	StatusCode             int64
}
