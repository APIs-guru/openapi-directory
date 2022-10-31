package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicationsAddOwnerPathParams struct {
	ApplicationObjectID string `pathParam:"style=simple,explode=false,name=applicationObjectId"`
	TenantID            string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ApplicationsAddOwnerQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ApplicationsAddOwnerRequests struct {
	AddOwnerParameters  map[string]map[string]interface{} `request:"mediaType=application/json"`
	AddOwnerParameters1 map[string]map[string]interface{} `request:"mediaType=text/json"`
}

type ApplicationsAddOwnerRequest struct {
	PathParams  ApplicationsAddOwnerPathParams
	QueryParams ApplicationsAddOwnerQueryParams
	Request     ApplicationsAddOwnerRequests
}

type ApplicationsAddOwnerResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
