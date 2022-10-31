package operations

import (
	"openapi/pkg/models/shared"
)

type ListSourceServiceOfferingsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ListSourceServiceOfferingsQueryParams struct {
	Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64                 `queryParam:"style=form,explode=true,name=offset"`
	SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
}

type ListSourceServiceOfferingsRequest struct {
	PathParams  ListSourceServiceOfferingsPathParams
	QueryParams ListSourceServiceOfferingsQueryParams
}

type ListSourceServiceOfferingsResponse struct {
	ContentType                string
	ErrorNotFound              *shared.ErrorNotFound
	ServiceOfferingsCollection *shared.ServiceOfferingsCollection
	StatusCode                 int64
}
