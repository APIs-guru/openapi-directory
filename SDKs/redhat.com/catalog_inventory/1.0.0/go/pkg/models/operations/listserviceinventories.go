package operations

import (
	"openapi/pkg/models/shared"
)

type ListServiceInventoriesQueryParams struct {
	Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64                 `queryParam:"style=form,explode=true,name=offset"`
	SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
}

type ListServiceInventoriesRequest struct {
	QueryParams ListServiceInventoriesQueryParams
}

type ListServiceInventoriesResponse struct {
	ContentType                  string
	ServiceInventoriesCollection *shared.ServiceInventoriesCollection
	StatusCode                   int64
}
