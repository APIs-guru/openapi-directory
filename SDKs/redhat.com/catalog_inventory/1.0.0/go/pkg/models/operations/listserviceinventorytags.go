package operations

import (
	"openapi/pkg/models/shared"
)

type ListServiceInventoryTagsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ListServiceInventoryTagsQueryParams struct {
	Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64                 `queryParam:"style=form,explode=true,name=offset"`
	SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
}

type ListServiceInventoryTagsRequest struct {
	PathParams  ListServiceInventoryTagsPathParams
	QueryParams ListServiceInventoryTagsQueryParams
}

type ListServiceInventoryTagsResponse struct {
	ContentType    string
	ErrorNotFound  *shared.ErrorNotFound
	StatusCode     int64
	TagsCollection *shared.TagsCollection
}
