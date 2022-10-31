package operations

import (
	"openapi/pkg/models/shared"
)

type GetJuniperSwitchSnmpConfigPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetJuniperSwitchSnmpConfigSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetJuniperSwitchSnmpConfigRequest struct {
	PathParams GetJuniperSwitchSnmpConfigPathParams
	Security   GetJuniperSwitchSnmpConfigSecurity
}

type GetJuniperSwitchSnmpConfigResponse struct {
	ContentType string
	SnmpConfig  *shared.SnmpConfig
	StatusCode  int64
}
