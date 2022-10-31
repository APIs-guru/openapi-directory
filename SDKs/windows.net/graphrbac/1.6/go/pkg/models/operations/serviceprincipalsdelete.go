package operations

import (
	"openapi/pkg/models/shared"
)

type ServicePrincipalsDeletePathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ServicePrincipalsDeleteQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ServicePrincipalsDeleteRequest struct {
	PathParams  ServicePrincipalsDeletePathParams
	QueryParams ServicePrincipalsDeleteQueryParams
}

type ServicePrincipalsDeleteResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
