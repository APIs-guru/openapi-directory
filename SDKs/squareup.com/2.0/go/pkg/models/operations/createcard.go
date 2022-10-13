package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCardSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateCardRequest struct {
	Request  shared.CreateCardRequest `request:"mediaType=application/json"`
	Security CreateCardSecurity
}

type CreateCardResponse struct {
	ContentType        string
	CreateCardResponse *shared.CreateCardResponse
	StatusCode         int64
}
