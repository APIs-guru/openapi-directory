package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsAddOwnerPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type GroupsAddOwnerQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type GroupsAddOwnerRequests struct {
	AddOwnerParameters  map[string]map[string]interface{} `request:"mediaType=application/json"`
	AddOwnerParameters1 map[string]map[string]interface{} `request:"mediaType=text/json"`
}

type GroupsAddOwnerRequest struct {
	PathParams  GroupsAddOwnerPathParams
	QueryParams GroupsAddOwnerQueryParams
	Request     GroupsAddOwnerRequests
}

type GroupsAddOwnerResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
