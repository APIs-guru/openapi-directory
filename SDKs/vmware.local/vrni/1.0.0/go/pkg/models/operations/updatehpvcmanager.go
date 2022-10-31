package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateHpvcManagerPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateHpvcManagerSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateHpvcManagerRequest struct {
	PathParams UpdateHpvcManagerPathParams
	Request    *shared.SwitchDataSource `request:"mediaType=application/json"`
	Security   UpdateHpvcManagerSecurity
}

type UpdateHpvcManagerResponse struct {
	APIError         *shared.APIError
	ContentType      string
	StatusCode       int64
	SwitchDataSource *shared.SwitchDataSource
}
