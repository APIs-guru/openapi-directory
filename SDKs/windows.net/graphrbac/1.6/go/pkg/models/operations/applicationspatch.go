package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicationsPatchPathParams struct {
	ApplicationObjectID string `pathParam:"style=simple,explode=false,name=applicationObjectId"`
	TenantID            string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ApplicationsPatchQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ApplicationsPatchRequests struct {
	ApplicationUpdateParameters  *shared.ApplicationUpdateParameters `request:"mediaType=application/json"`
	ApplicationUpdateParameters1 *shared.ApplicationUpdateParameters `request:"mediaType=text/json"`
}

type ApplicationsPatchRequest struct {
	PathParams  ApplicationsPatchPathParams
	QueryParams ApplicationsPatchQueryParams
	Request     ApplicationsPatchRequests
}

type ApplicationsPatchResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
