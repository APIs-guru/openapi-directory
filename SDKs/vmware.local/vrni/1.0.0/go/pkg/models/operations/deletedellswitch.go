package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDellSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteDellSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteDellSwitchRequest struct {
	PathParams DeleteDellSwitchPathParams
	Security   DeleteDellSwitchSecurity
}

type DeleteDellSwitchResponse struct {
	ContentType string
	StatusCode  int64
}
