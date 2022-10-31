package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCiscoSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteCiscoSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteCiscoSwitchRequest struct {
	PathParams DeleteCiscoSwitchPathParams
	Security   DeleteCiscoSwitchSecurity
}

type DeleteCiscoSwitchResponse struct {
	ContentType string
	StatusCode  int64
}
