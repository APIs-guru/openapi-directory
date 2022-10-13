package operations

import (
	"openapi/pkg/models/shared"
)

type GetNsxManagerPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetNsxManagerQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetNsxManagerSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetNsxManagerRequest struct {
	PathParams  GetNsxManagerPathParams
	QueryParams GetNsxManagerQueryParams
	Security    GetNsxManagerSecurity
}

type GetNsxManagerResponse struct {
	APIError    *shared.APIError
	BaseEntity  *shared.BaseEntity
	ContentType string
	StatusCode  int64
}
