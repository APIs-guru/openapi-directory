package operations

import (
	"openapi/pkg/models/shared"
)

type ListServicePlansQueryParams struct {
	Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64                 `queryParam:"style=form,explode=true,name=offset"`
	SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
}

type ListServicePlansRequest struct {
	QueryParams ListServicePlansQueryParams
}

type ListServicePlansResponse struct {
	ContentType            string
	ServicePlansCollection *shared.ServicePlansCollection
	StatusCode             int64
}
