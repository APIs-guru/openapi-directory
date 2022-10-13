package operations

import (
	"openapi/pkg/models/shared"
)

type GetVeteranStatusSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type GetVeteranStatusRequest struct {
	Request  shared.VeteranStatusRequest `request:"mediaType=application/json"`
	Security GetVeteranStatusSecurity
}

type GetVeteranStatusResponse struct {
	APIError                  *shared.APIError
	AuthorizationError        *shared.AuthorizationError
	ContentType               string
	StatusCode                int64
	VeteranStatusConfirmation *shared.VeteranStatusConfirmation
}
