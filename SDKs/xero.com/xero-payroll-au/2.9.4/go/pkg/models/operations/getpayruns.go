package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayRunsQueryParams struct {
	Order *string `queryParam:"style=form,explode=true,name=order"`
	Page  *int64  `queryParam:"style=form,explode=true,name=page"`
	Where *string `queryParam:"style=form,explode=true,name=where"`
}

type GetPayRunsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	XeroTenantID    string  `header:"name=Xero-Tenant-Id"`
}

type GetPayRunsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetPayRunsRequest struct {
	QueryParams GetPayRunsQueryParams
	Headers     GetPayRunsHeaders
	Security    GetPayRunsSecurity
}

type GetPayRunsResponse struct {
	APIException *shared.APIException
	ContentType  string
	PayRuns      *shared.PayRuns
	StatusCode   int64
}
