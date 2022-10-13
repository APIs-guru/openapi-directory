package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLocationSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateLocationRequest struct {
	Request  shared.CreateLocationRequest `request:"mediaType=application/json"`
	Security CreateLocationSecurity
}

type CreateLocationResponse struct {
	ContentType            string
	CreateLocationResponse *shared.CreateLocationResponse
	StatusCode             int64
}
