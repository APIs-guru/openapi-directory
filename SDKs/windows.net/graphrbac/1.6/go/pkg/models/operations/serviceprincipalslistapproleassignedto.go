package operations

import (
	"openapi/pkg/models/shared"
)

type ServicePrincipalsListAppRoleAssignedToPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ServicePrincipalsListAppRoleAssignedToQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ServicePrincipalsListAppRoleAssignedToRequest struct {
	PathParams  ServicePrincipalsListAppRoleAssignedToPathParams
	QueryParams ServicePrincipalsListAppRoleAssignedToQueryParams
}

type ServicePrincipalsListAppRoleAssignedToResponse struct {
	AppRoleAssignmentListResult *shared.AppRoleAssignmentListResult
	ContentType                 string
	GraphError                  *shared.GraphError
	StatusCode                  int64
}
