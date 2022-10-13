package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicationsCreatePathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ApplicationsCreateQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ApplicationsCreateRequests struct {
	ApplicationCreateParameters  *shared.ApplicationCreateParameters `request:"mediaType=application/json"`
	ApplicationCreateParameters1 *shared.ApplicationCreateParameters `request:"mediaType=text/json"`
}

type ApplicationsCreateRequest struct {
	PathParams  ApplicationsCreatePathParams
	QueryParams ApplicationsCreateQueryParams
	Request     ApplicationsCreateRequests
}

type ApplicationsCreateResponse struct {
	Application map[string]map[string]interface{}
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
