package operations

import (
	"openapi/pkg/models/shared"
)

type ListMerchantsQueryParams struct {
	Cursor *int64 `queryParam:"style=form,explode=true,name=cursor"`
}

type ListMerchantsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListMerchantsRequest struct {
	QueryParams ListMerchantsQueryParams
	Security    ListMerchantsSecurity
}

type ListMerchantsResponse struct {
	ContentType           string
	ListMerchantsResponse *shared.ListMerchantsResponse
	StatusCode            int64
}
