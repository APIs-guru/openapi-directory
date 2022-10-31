package operations

import (
	"openapi/pkg/models/shared"
)

type GetDellSwitchSnmpConfigPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetDellSwitchSnmpConfigSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDellSwitchSnmpConfigRequest struct {
	PathParams GetDellSwitchSnmpConfigPathParams
	Security   GetDellSwitchSnmpConfigSecurity
}

type GetDellSwitchSnmpConfigResponse struct {
	ContentType string
	SnmpConfig  *shared.SnmpConfig
	StatusCode  int64
}
