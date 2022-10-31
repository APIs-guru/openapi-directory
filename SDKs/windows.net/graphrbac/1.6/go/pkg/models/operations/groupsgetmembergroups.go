package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsGetMemberGroupsPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type GroupsGetMemberGroupsQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type GroupsGetMemberGroupsRequests struct {
	GroupGetMemberGroupsParameters  map[string]map[string]interface{} `request:"mediaType=application/json"`
	GroupGetMemberGroupsParameters1 map[string]map[string]interface{} `request:"mediaType=text/json"`
}

type GroupsGetMemberGroupsRequest struct {
	PathParams  GroupsGetMemberGroupsPathParams
	QueryParams GroupsGetMemberGroupsQueryParams
	Request     GroupsGetMemberGroupsRequests
}

type GroupsGetMemberGroupsResponse struct {
	ContentType                string
	GraphError                 *shared.GraphError
	GroupGetMemberGroupsResult *shared.GroupGetMemberGroupsResult
	StatusCode                 int64
}
