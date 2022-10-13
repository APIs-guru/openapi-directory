package operations

import (
	"openapi/pkg/models/shared"
)

type GetJuniperSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetJuniperSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetJuniperSwitchRequest struct {
	PathParams GetJuniperSwitchPathParams
	Security   GetJuniperSwitchSecurity
}

type GetJuniperSwitchResponse struct {
	ContentType      string
	StatusCode       int64
	SwitchDataSource *shared.SwitchDataSource
}
