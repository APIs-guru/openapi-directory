package operations

import (
	"openapi/pkg/models/shared"
)

type GetNamePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetNameQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetNameSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetNameRequest struct {
	PathParams  GetNamePathParams
	QueryParams GetNameQueryParams
	Security    GetNameSecurity
}

type GetNameResponse struct {
	ContentType string
	EntityName  *shared.EntityName
	StatusCode  int64
}
