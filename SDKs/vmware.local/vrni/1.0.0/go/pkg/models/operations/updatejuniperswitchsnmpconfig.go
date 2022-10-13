package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateJuniperSwitchSnmpConfigPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateJuniperSwitchSnmpConfigSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateJuniperSwitchSnmpConfigRequest struct {
	PathParams UpdateJuniperSwitchSnmpConfigPathParams
	Request    *shared.SnmpConfig `request:"mediaType=application/json"`
	Security   UpdateJuniperSwitchSnmpConfigSecurity
}

type UpdateJuniperSwitchSnmpConfigResponse struct {
	APIError    *shared.APIError
	ContentType string
	SnmpConfig  *shared.SnmpConfig
	StatusCode  int64
}
