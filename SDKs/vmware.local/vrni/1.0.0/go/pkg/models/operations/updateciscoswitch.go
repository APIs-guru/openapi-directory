package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCiscoSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateCiscoSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateCiscoSwitchRequest struct {
	PathParams UpdateCiscoSwitchPathParams
	Request    *shared.CiscoSwitchDataSource `request:"mediaType=application/json"`
	Security   UpdateCiscoSwitchSecurity
}

type UpdateCiscoSwitchResponse struct {
	APIError              *shared.APIError
	CiscoSwitchDataSource *shared.CiscoSwitchDataSource
	ContentType           string
	StatusCode            int64
}
