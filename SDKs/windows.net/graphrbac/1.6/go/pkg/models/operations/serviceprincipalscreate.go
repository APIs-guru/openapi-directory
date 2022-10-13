package operations

import (
	"openapi/pkg/models/shared"
)

type ServicePrincipalsCreatePathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ServicePrincipalsCreateQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ServicePrincipalsCreateRequests struct {
	ServicePrincipalCreateParameters  *shared.ServicePrincipalCreateParameters `request:"mediaType=application/json"`
	ServicePrincipalCreateParameters1 *shared.ServicePrincipalCreateParameters `request:"mediaType=text/json"`
}

type ServicePrincipalsCreateRequest struct {
	PathParams  ServicePrincipalsCreatePathParams
	QueryParams ServicePrincipalsCreateQueryParams
	Request     ServicePrincipalsCreateRequests
}

type ServicePrincipalsCreateResponse struct {
	ContentType      string
	GraphError       *shared.GraphError
	ServicePrincipal map[string]map[string]interface{}
	StatusCode       int64
}
