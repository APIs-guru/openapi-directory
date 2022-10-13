package operations

import (
	"openapi/pkg/models/shared"
)

type ListOrdersPathParams struct {
	LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
}

type ListOrdersQueryParams struct {
	BatchToken *string `queryParam:"style=form,explode=true,name=batch_token"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	Order      *string `queryParam:"style=form,explode=true,name=order"`
}

type ListOrdersSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListOrdersRequest struct {
	PathParams  ListOrdersPathParams
	QueryParams ListOrdersQueryParams
	Security    ListOrdersSecurity
}

type ListOrdersResponse struct {
	ContentType string
	StatusCode  int64
	V1Orders    []shared.V1Order
}
