package operations

import (
	"openapi/pkg/models/shared"
)

type EnableDellSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EnableDellSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type EnableDellSwitchRequest struct {
	PathParams EnableDellSwitchPathParams
	Security   EnableDellSwitchSecurity
}

type EnableDellSwitchResponse struct {
	ContentType string
	StatusCode  int64
}
