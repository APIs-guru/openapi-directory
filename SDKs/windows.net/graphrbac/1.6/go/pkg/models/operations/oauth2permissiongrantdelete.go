package operations

import (
	"openapi/pkg/models/shared"
)

type OAuth2PermissionGrantDeletePathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type OAuth2PermissionGrantDeleteQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type OAuth2PermissionGrantDeleteRequest struct {
	PathParams  OAuth2PermissionGrantDeletePathParams
	QueryParams OAuth2PermissionGrantDeleteQueryParams
}

type OAuth2PermissionGrantDeleteResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
