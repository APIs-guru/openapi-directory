package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyListingsNegotiationsQueryParams struct {
	Offset  *int64 `queryParam:"style=form,explode=true,name=offset"`
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetMyListingsNegotiationsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyListingsNegotiationsRequest struct {
	QueryParams GetMyListingsNegotiationsQueryParams
	Security    GetMyListingsNegotiationsSecurity
}

type GetMyListingsNegotiationsResponse struct {
	ContentType string
	StatusCode  int64
}
