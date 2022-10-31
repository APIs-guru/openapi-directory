package operations

import (
	"openapi/pkg/models/shared"
)

type EnableBrocadeSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EnableBrocadeSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type EnableBrocadeSwitchRequest struct {
	PathParams EnableBrocadeSwitchPathParams
	Security   EnableBrocadeSwitchSecurity
}

type EnableBrocadeSwitchResponse struct {
	ContentType string
	StatusCode  int64
}
