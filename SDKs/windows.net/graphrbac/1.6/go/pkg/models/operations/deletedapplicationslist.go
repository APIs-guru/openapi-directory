package operations

import (
	"openapi/pkg/models/shared"
)

type DeletedApplicationsListPathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type DeletedApplicationsListQueryParams struct {
	DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
	APIVersion   string  `queryParam:"style=form,explode=true,name=api-version"`
}

type DeletedApplicationsListRequest struct {
	PathParams  DeletedApplicationsListPathParams
	QueryParams DeletedApplicationsListQueryParams
}

type DeletedApplicationsListResponse struct {
	ApplicationListResult *shared.ApplicationListResult
	ContentType           string
	GraphError            *shared.GraphError
	StatusCode            int64
}
