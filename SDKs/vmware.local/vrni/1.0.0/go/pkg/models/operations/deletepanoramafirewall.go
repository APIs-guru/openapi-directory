package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePanoramaFirewallPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeletePanoramaFirewallSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeletePanoramaFirewallRequest struct {
	PathParams DeletePanoramaFirewallPathParams
	Security   DeletePanoramaFirewallSecurity
}

type DeletePanoramaFirewallResponse struct {
	ContentType string
	StatusCode  int64
}
