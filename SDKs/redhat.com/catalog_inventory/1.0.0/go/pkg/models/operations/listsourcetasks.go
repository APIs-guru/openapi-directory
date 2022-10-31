package operations

import (
	"openapi/pkg/models/shared"
)

type ListSourceTasksPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ListSourceTasksQueryParams struct {
	Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64                 `queryParam:"style=form,explode=true,name=offset"`
	SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
}

type ListSourceTasksRequest struct {
	PathParams  ListSourceTasksPathParams
	QueryParams ListSourceTasksQueryParams
}

type ListSourceTasksResponse struct {
	ContentType     string
	ErrorNotFound   *shared.ErrorNotFound
	StatusCode      int64
	TasksCollection *shared.TasksCollection
}
