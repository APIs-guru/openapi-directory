package operations

import (
	"openapi/pkg/models/shared"
)

type UsersCreatePathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type UsersCreateQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type UsersCreateRequests struct {
	UserCreateParameters  map[string]map[string]interface{} `request:"mediaType=application/json"`
	UserCreateParameters1 map[string]map[string]interface{} `request:"mediaType=text/json"`
}

type UsersCreateRequest struct {
	PathParams  UsersCreatePathParams
	QueryParams UsersCreateQueryParams
	Request     UsersCreateRequests
}

type UsersCreateResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
	User        map[string]map[string]interface{}
}
