package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUcsSnmpConfigPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateUcsSnmpConfigSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateUcsSnmpConfigRequest struct {
	PathParams UpdateUcsSnmpConfigPathParams
	Request    *shared.SnmpConfig `request:"mediaType=application/json"`
	Security   UpdateUcsSnmpConfigSecurity
}

type UpdateUcsSnmpConfigResponse struct {
	APIError    *shared.APIError
	ContentType string
	SnmpConfig  *shared.SnmpConfig
	StatusCode  int64
}
