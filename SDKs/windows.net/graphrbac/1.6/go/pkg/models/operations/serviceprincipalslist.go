package operations

import (
	"openapi/pkg/models/shared"
)

type ServicePrincipalsListPathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ServicePrincipalsListQueryParams struct {
	DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
	APIVersion   string  `queryParam:"style=form,explode=true,name=api-version"`
}

type ServicePrincipalsListRequest struct {
	PathParams  ServicePrincipalsListPathParams
	QueryParams ServicePrincipalsListQueryParams
}

type ServicePrincipalsListResponse struct {
	ContentType                string
	GraphError                 *shared.GraphError
	ServicePrincipalListResult *shared.ServicePrincipalListResult
	StatusCode                 int64
}
