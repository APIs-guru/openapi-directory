package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBrocadeSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateBrocadeSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateBrocadeSwitchRequest struct {
	PathParams UpdateBrocadeSwitchPathParams
	Request    *shared.SwitchDataSource `request:"mediaType=application/json"`
	Security   UpdateBrocadeSwitchSecurity
}

type UpdateBrocadeSwitchResponse struct {
	APIError         *shared.APIError
	ContentType      string
	StatusCode       int64
	SwitchDataSource *shared.SwitchDataSource
}
