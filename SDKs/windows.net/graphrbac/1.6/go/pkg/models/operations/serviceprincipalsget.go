package operations

import (
	"openapi/pkg/models/shared"
)

type ServicePrincipalsGetPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ServicePrincipalsGetQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ServicePrincipalsGetRequest struct {
	PathParams  ServicePrincipalsGetPathParams
	QueryParams ServicePrincipalsGetQueryParams
}

type ServicePrincipalsGetResponse struct {
	ContentType      string
	GraphError       *shared.GraphError
	ServicePrincipal map[string]map[string]interface{}
	StatusCode       int64
}
