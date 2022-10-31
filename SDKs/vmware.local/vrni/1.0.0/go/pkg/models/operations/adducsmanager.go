package operations

import (
	"openapi/pkg/models/shared"
)

type AddUcsManagerSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type AddUcsManagerRequest struct {
	Request  *shared.SwitchDataSource `request:"mediaType=application/json"`
	Security AddUcsManagerSecurity
}

type AddUcsManagerResponse struct {
	APIError         *shared.APIError
	ContentType      string
	StatusCode       int64
	SwitchDataSource *shared.SwitchDataSource
}
