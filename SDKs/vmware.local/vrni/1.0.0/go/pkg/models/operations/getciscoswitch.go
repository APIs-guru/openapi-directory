package operations

import (
	"openapi/pkg/models/shared"
)

type GetCiscoSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetCiscoSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCiscoSwitchRequest struct {
	PathParams GetCiscoSwitchPathParams
	Security   GetCiscoSwitchSecurity
}

type GetCiscoSwitchResponse struct {
	CiscoSwitchDataSource *shared.CiscoSwitchDataSource
	ContentType           string
	StatusCode            int64
}
