package operations

import (
	"openapi/pkg/models/shared"
)

type GetVnicPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetVnicQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetVnicSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetVnicRequest struct {
	PathParams  GetVnicPathParams
	QueryParams GetVnicQueryParams
	Security    GetVnicSecurity
}

type GetVnicResponse struct {
	APIError    *shared.APIError
	BaseVnic    *shared.BaseVnic
	ContentType string
	StatusCode  int64
}
