package operations

import (
	"openapi/pkg/models/shared"
)

type UsersUpdatePathParams struct {
	TenantID      string `pathParam:"style=simple,explode=false,name=tenantID"`
	UpnOrObjectID string `pathParam:"style=simple,explode=false,name=upnOrObjectId"`
}

type UsersUpdateQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type UsersUpdateRequests struct {
	UserUpdateParameters  map[string]map[string]interface{} `request:"mediaType=application/json"`
	UserUpdateParameters1 map[string]map[string]interface{} `request:"mediaType=text/json"`
}

type UsersUpdateRequest struct {
	PathParams  UsersUpdatePathParams
	QueryParams UsersUpdateQueryParams
	Request     UsersUpdateRequests
}

type UsersUpdateResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
