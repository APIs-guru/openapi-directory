package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicationsGetServicePrincipalsIDByAppIDPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=applicationID"`
	TenantID      string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ApplicationsGetServicePrincipalsIDByAppIDQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ApplicationsGetServicePrincipalsIDByAppIDRequest struct {
	PathParams  ApplicationsGetServicePrincipalsIDByAppIDPathParams
	QueryParams ApplicationsGetServicePrincipalsIDByAppIDQueryParams
}

type ApplicationsGetServicePrincipalsIDByAppIDResponse struct {
	ContentType                  string
	GraphError                   *shared.GraphError
	ServicePrincipalObjectResult *shared.ServicePrincipalObjectResult
	StatusCode                   int64
}
