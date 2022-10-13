package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsAddMemberPathParams struct {
	GroupObjectID string `pathParam:"style=simple,explode=false,name=groupObjectId"`
	TenantID      string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type GroupsAddMemberQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type GroupsAddMemberRequests struct {
	GroupAddMemberParameters  map[string]map[string]interface{} `request:"mediaType=application/json"`
	GroupAddMemberParameters1 map[string]map[string]interface{} `request:"mediaType=text/json"`
}

type GroupsAddMemberRequest struct {
	PathParams  GroupsAddMemberPathParams
	QueryParams GroupsAddMemberQueryParams
	Request     GroupsAddMemberRequests
}

type GroupsAddMemberResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
