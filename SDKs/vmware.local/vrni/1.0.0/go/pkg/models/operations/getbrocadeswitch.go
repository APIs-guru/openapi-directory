package operations

import (
	"openapi/pkg/models/shared"
)

type GetBrocadeSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBrocadeSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetBrocadeSwitchRequest struct {
	PathParams GetBrocadeSwitchPathParams
	Security   GetBrocadeSwitchSecurity
}

type GetBrocadeSwitchResponse struct {
	ContentType      string
	StatusCode       int64
	SwitchDataSource *shared.SwitchDataSource
}
