package operations

import (
	"openapi/pkg/models/shared"
)

type GetCategoriesQueryParams struct {
	FilterParent *string `queryParam:"style=form,explode=true,name=filter[parent]"`
}

type GetCategoriesRequest struct {
	QueryParams GetCategoriesQueryParams
}

type GetCategoriesResponse struct {
	ContentType            string
	ListCategoriesResponse *shared.ListCategoriesResponse
	StatusCode             int64
}
