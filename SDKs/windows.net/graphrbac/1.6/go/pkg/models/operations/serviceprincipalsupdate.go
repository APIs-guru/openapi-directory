package operations

import (
	"openapi/pkg/models/shared"
)

type ServicePrincipalsUpdatePathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ServicePrincipalsUpdateQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ServicePrincipalsUpdateRequests struct {
	ServicePrincipalUpdateParameters  *shared.ServicePrincipalUpdateParameters `request:"mediaType=application/json"`
	ServicePrincipalUpdateParameters1 *shared.ServicePrincipalUpdateParameters `request:"mediaType=text/json"`
}

type ServicePrincipalsUpdateRequest struct {
	PathParams  ServicePrincipalsUpdatePathParams
	QueryParams ServicePrincipalsUpdateQueryParams
	Request     ServicePrincipalsUpdateRequests
}

type ServicePrincipalsUpdateResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
