package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsIsMemberOfPathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type GroupsIsMemberOfQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type GroupsIsMemberOfRequests struct {
	CheckGroupMembershipParameters  map[string]map[string]interface{} `request:"mediaType=application/json"`
	CheckGroupMembershipParameters1 map[string]map[string]interface{} `request:"mediaType=text/json"`
}

type GroupsIsMemberOfRequest struct {
	PathParams  GroupsIsMemberOfPathParams
	QueryParams GroupsIsMemberOfQueryParams
	Request     GroupsIsMemberOfRequests
}

type GroupsIsMemberOfResponse struct {
	CheckGroupMembershipResult map[string]map[string]interface{}
	ContentType                string
	GraphError                 *shared.GraphError
	StatusCode                 int64
}
