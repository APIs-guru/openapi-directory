package operations

import (
	"openapi/pkg/models/shared"
)

type GetSuperfundsQueryParams struct {
	Order *string `queryParam:"style=form,explode=true,name=order"`
	Page  *int64  `queryParam:"style=form,explode=true,name=page"`
	Where *string `queryParam:"style=form,explode=true,name=where"`
}

type GetSuperfundsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	XeroTenantID    string  `header:"name=Xero-Tenant-Id"`
}

type GetSuperfundsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetSuperfundsRequest struct {
	QueryParams GetSuperfundsQueryParams
	Headers     GetSuperfundsHeaders
	Security    GetSuperfundsSecurity
}

type GetSuperfundsResponse struct {
	APIException *shared.APIException
	ContentType  string
	StatusCode   int64
	SuperFunds   *shared.SuperFunds
}
