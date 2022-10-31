package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsCreatePathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type GroupsCreateQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type GroupsCreateRequests struct {
	GroupCreateParameters  map[string]map[string]interface{} `request:"mediaType=application/json"`
	GroupCreateParameters1 map[string]map[string]interface{} `request:"mediaType=text/json"`
}

type GroupsCreateRequest struct {
	PathParams  GroupsCreatePathParams
	QueryParams GroupsCreateQueryParams
	Request     GroupsCreateRequests
}

type GroupsCreateResponse struct {
	AdGroup     map[string]map[string]interface{}
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
