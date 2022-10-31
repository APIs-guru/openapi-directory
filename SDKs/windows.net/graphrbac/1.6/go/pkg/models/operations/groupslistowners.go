package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsListOwnersPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type GroupsListOwnersQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type GroupsListOwnersRequest struct {
	PathParams  GroupsListOwnersPathParams
	QueryParams GroupsListOwnersQueryParams
}

type GroupsListOwnersResponse struct {
	ContentType               string
	DirectoryObjectListResult *shared.DirectoryObjectListResult
	GraphError                *shared.GraphError
	StatusCode                int64
}
