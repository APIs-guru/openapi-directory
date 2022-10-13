package operations

import (
	"openapi/pkg/models/shared"
)

type ListSourceServiceInventoriesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ListSourceServiceInventoriesQueryParams struct {
	Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64                 `queryParam:"style=form,explode=true,name=offset"`
	SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
}

type ListSourceServiceInventoriesRequest struct {
	PathParams  ListSourceServiceInventoriesPathParams
	QueryParams ListSourceServiceInventoriesQueryParams
}

type ListSourceServiceInventoriesResponse struct {
	ContentType                  string
	ErrorNotFound                *shared.ErrorNotFound
	ServiceInventoriesCollection *shared.ServiceInventoriesCollection
	StatusCode                   int64
}
