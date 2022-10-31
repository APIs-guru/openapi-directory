package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTerminalCheckoutSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateTerminalCheckoutRequest struct {
	Request  shared.CreateTerminalCheckoutRequest `request:"mediaType=application/json"`
	Security CreateTerminalCheckoutSecurity
}

type CreateTerminalCheckoutResponse struct {
	ContentType                    string
	CreateTerminalCheckoutResponse *shared.CreateTerminalCheckoutResponse
	StatusCode                     int64
}
