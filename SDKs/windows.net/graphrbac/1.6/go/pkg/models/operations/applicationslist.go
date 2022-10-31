package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicationsListPathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ApplicationsListQueryParams struct {
	DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
	APIVersion   string  `queryParam:"style=form,explode=true,name=api-version"`
}

type ApplicationsListRequest struct {
	PathParams  ApplicationsListPathParams
	QueryParams ApplicationsListQueryParams
}

type ApplicationsListResponse struct {
	ApplicationListResult *shared.ApplicationListResult
	ContentType           string
	GraphError            *shared.GraphError
	StatusCode            int64
}
