package operations

import (
	"openapi/pkg/models/shared"
)

type GetCheckpointFirewallPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetCheckpointFirewallSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCheckpointFirewallRequest struct {
	PathParams GetCheckpointFirewallPathParams
	Security   GetCheckpointFirewallSecurity
}

type GetCheckpointFirewallResponse struct {
	ContentType      string
	StatusCode       int64
	SwitchDataSource *shared.SwitchDataSource
}
