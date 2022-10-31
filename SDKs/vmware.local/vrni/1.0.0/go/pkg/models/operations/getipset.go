package operations

import (
	"openapi/pkg/models/shared"
)

type GetIPSetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetIPSetQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetIPSetSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetIPSetRequest struct {
	PathParams  GetIPSetPathParams
	QueryParams GetIPSetQueryParams
	Security    GetIPSetSecurity
}

type GetIPSetResponse struct {
	APIError    *shared.APIError
	BaseIPSet   *shared.BaseIPSet
	ContentType string
	StatusCode  int64
}
