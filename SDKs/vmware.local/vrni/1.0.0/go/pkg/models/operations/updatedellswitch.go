package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDellSwitchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateDellSwitchSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateDellSwitchRequest struct {
	PathParams UpdateDellSwitchPathParams
	Request    *shared.DellSwitchDataSource `request:"mediaType=application/json"`
	Security   UpdateDellSwitchSecurity
}

type UpdateDellSwitchResponse struct {
	APIError             *shared.APIError
	ContentType          string
	DellSwitchDataSource *shared.DellSwitchDataSource
	StatusCode           int64
}
