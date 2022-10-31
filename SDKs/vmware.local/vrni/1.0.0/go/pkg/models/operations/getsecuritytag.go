package operations

import (
	"openapi/pkg/models/shared"
)

type GetSecurityTagPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSecurityTagQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetSecurityTagSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetSecurityTagRequest struct {
	PathParams  GetSecurityTagPathParams
	QueryParams GetSecurityTagQueryParams
	Security    GetSecurityTagSecurity
}

type GetSecurityTagResponse struct {
	APIError    *shared.APIError
	ContentType string
	SecurityTag *shared.SecurityTag
	StatusCode  int64
}
