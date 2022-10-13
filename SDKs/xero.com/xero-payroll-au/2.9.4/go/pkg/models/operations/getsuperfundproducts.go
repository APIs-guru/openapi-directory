package operations

import (
	"openapi/pkg/models/shared"
)

type GetSuperfundProductsQueryParams struct {
	Abn *string `queryParam:"style=form,explode=true,name=ABN"`
	Usi *string `queryParam:"style=form,explode=true,name=USI"`
}

type GetSuperfundProductsHeaders struct {
	XeroTenantID string `header:"name=Xero-Tenant-Id"`
}

type GetSuperfundProductsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetSuperfundProductsRequest struct {
	QueryParams GetSuperfundProductsQueryParams
	Headers     GetSuperfundProductsHeaders
	Security    GetSuperfundProductsSecurity
}

type GetSuperfundProductsResponse struct {
	APIException      *shared.APIException
	ContentType       string
	StatusCode        int64
	SuperFundProducts *shared.SuperFundProducts
}
