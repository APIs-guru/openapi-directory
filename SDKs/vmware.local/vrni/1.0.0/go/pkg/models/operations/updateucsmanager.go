package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUcsManagerPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateUcsManagerSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateUcsManagerRequest struct {
	PathParams UpdateUcsManagerPathParams
	Request    *shared.SwitchDataSource `request:"mediaType=application/json"`
	Security   UpdateUcsManagerSecurity
}

type UpdateUcsManagerResponse struct {
	APIError         *shared.APIError
	ContentType      string
	StatusCode       int64
	SwitchDataSource *shared.SwitchDataSource
}
