package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAristaSwitchSnmpConfigPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateAristaSwitchSnmpConfigSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateAristaSwitchSnmpConfigRequest struct {
	PathParams UpdateAristaSwitchSnmpConfigPathParams
	Request    *shared.SnmpConfig `request:"mediaType=application/json"`
	Security   UpdateAristaSwitchSnmpConfigSecurity
}

type UpdateAristaSwitchSnmpConfigResponse struct {
	APIError    *shared.APIError
	ContentType string
	SnmpConfig  *shared.SnmpConfig
	StatusCode  int64
}
