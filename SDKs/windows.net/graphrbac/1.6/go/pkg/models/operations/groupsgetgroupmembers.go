package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsGetGroupMembersPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type GroupsGetGroupMembersQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type GroupsGetGroupMembersRequest struct {
	PathParams  GroupsGetGroupMembersPathParams
	QueryParams GroupsGetGroupMembersQueryParams
}

type GroupsGetGroupMembersResponse struct {
	ContentType               string
	DirectoryObjectListResult *shared.DirectoryObjectListResult
	GraphError                *shared.GraphError
	StatusCode                int64
}
