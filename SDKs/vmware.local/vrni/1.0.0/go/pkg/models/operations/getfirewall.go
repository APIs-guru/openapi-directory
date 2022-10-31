package operations

import (
	"openapi/pkg/models/shared"
)

type GetFirewallPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetFirewallQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetFirewallSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetFirewallRequest struct {
	PathParams  GetFirewallPathParams
	QueryParams GetFirewallQueryParams
	Security    GetFirewallSecurity
}

type GetFirewallResponse struct {
	APIError         *shared.APIError
	BaseFirewallRule *shared.BaseFirewallRule
	ContentType      string
	StatusCode       int64
}
