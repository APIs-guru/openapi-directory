package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicationsDeletePathParams struct {
	ApplicationObjectID string `pathParam:"style=simple,explode=false,name=applicationObjectId"`
	TenantID            string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ApplicationsDeleteQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ApplicationsDeleteRequest struct {
	PathParams  ApplicationsDeletePathParams
	QueryParams ApplicationsDeleteQueryParams
}

type ApplicationsDeleteResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
