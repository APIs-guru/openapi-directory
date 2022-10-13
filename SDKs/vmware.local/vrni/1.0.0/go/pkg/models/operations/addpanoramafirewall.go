package operations

import (
	"openapi/pkg/models/shared"
)

type AddPanoramaFirewallSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type AddPanoramaFirewallRequest struct {
	Request  *shared.SwitchDataSourceRequest `request:"mediaType=application/json"`
	Security AddPanoramaFirewallSecurity
}

type AddPanoramaFirewallResponse struct {
	APIError         *shared.APIError
	ContentType      string
	StatusCode       int64
	SwitchDataSource *shared.SwitchDataSource
}
