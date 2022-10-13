package operations

import (
	"openapi/pkg/models/shared"
)

type EndpointGetCategoriesQueryParams struct {
	Country *string `queryParam:"style=form,explode=true,name=country"`
	Limit   *int32  `queryParam:"style=form,explode=true,name=limit"`
	Locale  *string `queryParam:"style=form,explode=true,name=locale"`
	Offset  *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type EndpointGetCategoriesHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type EndpointGetCategoriesSecurity struct {
	SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
}

type EndpointGetCategoriesRequest struct {
	QueryParams EndpointGetCategoriesQueryParams
	Headers     EndpointGetCategoriesHeaders
	Security    EndpointGetCategoriesSecurity
}

type EndpointGetCategoriesResponse struct {
	CategoriesObject    *shared.CategoriesObject
	ContentType         string
	ErrorResponseObject *shared.ErrorResponseObject
	StatusCode          int64
}
