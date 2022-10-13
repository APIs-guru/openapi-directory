package operations

import (
	"openapi/pkg/models/shared"
)

type UsersDeletePathParams struct {
	TenantID      string `pathParam:"style=simple,explode=false,name=tenantID"`
	UpnOrObjectID string `pathParam:"style=simple,explode=false,name=upnOrObjectId"`
}

type UsersDeleteQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type UsersDeleteRequest struct {
	PathParams  UsersDeletePathParams
	QueryParams UsersDeleteQueryParams
}

type UsersDeleteResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
