package operations

import (
	"openapi/pkg/models/shared"
)

type ListSourceServiceOfferingNodesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ListSourceServiceOfferingNodesQueryParams struct {
	Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64                 `queryParam:"style=form,explode=true,name=offset"`
	SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
}

type ListSourceServiceOfferingNodesRequest struct {
	PathParams  ListSourceServiceOfferingNodesPathParams
	QueryParams ListSourceServiceOfferingNodesQueryParams
}

type ListSourceServiceOfferingNodesResponse struct {
	ContentType                    string
	ErrorNotFound                  *shared.ErrorNotFound
	ServiceOfferingNodesCollection *shared.ServiceOfferingNodesCollection
	StatusCode                     int64
}
