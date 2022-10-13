package operations

import (
	"openapi/pkg/models/shared"
)

type EnableCiscoSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EnableCiscoSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type EnableCiscoSwitchRequest struct {
	PathParams EnableCiscoSwitchPathParams
	Security   EnableCiscoSwitchSecurity
}

type EnableCiscoSwitchResponse struct {
	ContentType string
	StatusCode  int64
}
