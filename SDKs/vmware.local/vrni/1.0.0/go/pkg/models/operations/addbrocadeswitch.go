package operations

import (
	"openapi/pkg/models/shared"
)

type AddBrocadeSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type AddBrocadeSwitchRequest struct {
	Request  *shared.SwitchDataSourceRequest `request:"mediaType=application/json"`
	Security AddBrocadeSwitchSecurity
}

type AddBrocadeSwitchResponse struct {
	APIError         *shared.APIError
	ContentType      string
	StatusCode       int64
	SwitchDataSource *shared.SwitchDataSource
}
