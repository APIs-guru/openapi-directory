package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAristaSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateAristaSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateAristaSwitchRequest struct {
	PathParams UpdateAristaSwitchPathParams
	Request    *shared.SwitchDataSource `request:"mediaType=application/json"`
	Security   UpdateAristaSwitchSecurity
}

type UpdateAristaSwitchResponse struct {
	APIError         *shared.APIError
	ContentType      string
	StatusCode       int64
	SwitchDataSource *shared.SwitchDataSource
}
