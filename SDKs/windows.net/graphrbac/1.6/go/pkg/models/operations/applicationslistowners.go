package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicationsListOwnersPathParams struct {
	ApplicationObjectID string `pathParam:"style=simple,explode=false,name=applicationObjectId"`
	TenantID            string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ApplicationsListOwnersQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ApplicationsListOwnersRequest struct {
	PathParams  ApplicationsListOwnersPathParams
	QueryParams ApplicationsListOwnersQueryParams
}

type ApplicationsListOwnersResponse struct {
	ContentType               string
	DirectoryObjectListResult *shared.DirectoryObjectListResult
	GraphError                *shared.GraphError
	StatusCode                int64
}
