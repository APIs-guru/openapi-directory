package operations

import (
	"openapi/pkg/models/shared"
)

type ServicePrincipalsAddOwnerPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ServicePrincipalsAddOwnerQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ServicePrincipalsAddOwnerRequests struct {
	AddOwnerParameters  map[string]map[string]interface{} `request:"mediaType=application/json"`
	AddOwnerParameters1 map[string]map[string]interface{} `request:"mediaType=text/json"`
}

type ServicePrincipalsAddOwnerRequest struct {
	PathParams  ServicePrincipalsAddOwnerPathParams
	QueryParams ServicePrincipalsAddOwnerQueryParams
	Request     ServicePrincipalsAddOwnerRequests
}

type ServicePrincipalsAddOwnerResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
