package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomerSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateCustomerRequest struct {
	Request  shared.CreateCustomerRequest `request:"mediaType=application/json"`
	Security CreateCustomerSecurity
}

type CreateCustomerResponse struct {
	ContentType            string
	CreateCustomerResponse *shared.CreateCustomerResponse
	StatusCode             int64
}
