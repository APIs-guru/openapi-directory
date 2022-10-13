package operations

import (
	"openapi/pkg/models/shared"
)

type ServicePrincipalsRemoveOwnerPathParams struct {
	ObjectID      string `pathParam:"style=simple,explode=false,name=objectId"`
	OwnerObjectID string `pathParam:"style=simple,explode=false,name=ownerObjectId"`
	TenantID      string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ServicePrincipalsRemoveOwnerQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ServicePrincipalsRemoveOwnerRequest struct {
	PathParams  ServicePrincipalsRemoveOwnerPathParams
	QueryParams ServicePrincipalsRemoveOwnerQueryParams
}

type ServicePrincipalsRemoveOwnerResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
