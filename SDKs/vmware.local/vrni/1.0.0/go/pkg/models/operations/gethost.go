package operations

import (
	"openapi/pkg/models/shared"
)

type GetHostPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetHostQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetHostSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetHostRequest struct {
	PathParams  GetHostPathParams
	QueryParams GetHostQueryParams
	Security    GetHostSecurity
}

type GetHostResponse struct {
	APIError    *shared.APIError
	ContentType string
	Host        *shared.Host
	StatusCode  int64
}
