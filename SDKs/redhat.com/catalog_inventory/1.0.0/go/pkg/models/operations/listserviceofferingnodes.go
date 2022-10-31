package operations

import (
	"openapi/pkg/models/shared"
)

type ListServiceOfferingNodesQueryParams struct {
	Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64                 `queryParam:"style=form,explode=true,name=offset"`
	SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
}

type ListServiceOfferingNodesRequest struct {
	QueryParams ListServiceOfferingNodesQueryParams
}

type ListServiceOfferingNodesResponse struct {
	ContentType                    string
	ServiceOfferingNodesCollection *shared.ServiceOfferingNodesCollection
	StatusCode                     int64
}
