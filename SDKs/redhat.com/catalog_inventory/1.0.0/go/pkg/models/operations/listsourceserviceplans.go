package operations

import (
	"openapi/pkg/models/shared"
)

type ListSourceServicePlansPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ListSourceServicePlansQueryParams struct {
	Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64                 `queryParam:"style=form,explode=true,name=offset"`
	SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
}

type ListSourceServicePlansRequest struct {
	PathParams  ListSourceServicePlansPathParams
	QueryParams ListSourceServicePlansQueryParams
}

type ListSourceServicePlansResponse struct {
	ContentType            string
	ErrorNotFound          *shared.ErrorNotFound
	ServicePlansCollection *shared.ServicePlansCollection
	StatusCode             int64
}
