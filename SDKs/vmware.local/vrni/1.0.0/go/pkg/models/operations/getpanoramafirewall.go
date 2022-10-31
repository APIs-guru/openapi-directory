package operations

import (
	"openapi/pkg/models/shared"
)

type GetPanoramaFirewallPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPanoramaFirewallSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetPanoramaFirewallRequest struct {
	PathParams GetPanoramaFirewallPathParams
	Security   GetPanoramaFirewallSecurity
}

type GetPanoramaFirewallResponse struct {
	ContentType      string
	StatusCode       int64
	SwitchDataSource *shared.SwitchDataSource
}
