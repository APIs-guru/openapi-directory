package operations

import (
	"openapi/pkg/models/shared"
)

type ServicePrincipalsListAppRoleAssignmentsPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ServicePrincipalsListAppRoleAssignmentsQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ServicePrincipalsListAppRoleAssignmentsRequest struct {
	PathParams  ServicePrincipalsListAppRoleAssignmentsPathParams
	QueryParams ServicePrincipalsListAppRoleAssignmentsQueryParams
}

type ServicePrincipalsListAppRoleAssignmentsResponse struct {
	AppRoleAssignmentListResult *shared.AppRoleAssignmentListResult
	ContentType                 string
	GraphError                  *shared.GraphError
	StatusCode                  int64
}
