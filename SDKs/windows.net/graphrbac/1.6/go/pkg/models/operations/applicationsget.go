package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicationsGetPathParams struct {
	ApplicationObjectID string `pathParam:"style=simple,explode=false,name=applicationObjectId"`
	TenantID            string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ApplicationsGetQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ApplicationsGetRequest struct {
	PathParams  ApplicationsGetPathParams
	QueryParams ApplicationsGetQueryParams
}

type ApplicationsGetResponse struct {
	Application map[string]map[string]interface{}
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
