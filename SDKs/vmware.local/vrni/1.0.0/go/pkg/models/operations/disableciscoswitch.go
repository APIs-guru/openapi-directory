package operations

import (
	"openapi/pkg/models/shared"
)

type DisableCiscoSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DisableCiscoSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DisableCiscoSwitchRequest struct {
	PathParams DisableCiscoSwitchPathParams
	Security   DisableCiscoSwitchSecurity
}

type DisableCiscoSwitchResponse struct {
	ContentType string
	StatusCode  int64
}
