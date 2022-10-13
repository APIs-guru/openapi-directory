package operations

import (
	"openapi/pkg/models/shared"
)

type ServicePrincipalsListOwnersPathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ServicePrincipalsListOwnersQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ServicePrincipalsListOwnersRequest struct {
	PathParams  ServicePrincipalsListOwnersPathParams
	QueryParams ServicePrincipalsListOwnersQueryParams
}

type ServicePrincipalsListOwnersResponse struct {
	ContentType               string
	DirectoryObjectListResult *shared.DirectoryObjectListResult
	GraphError                *shared.GraphError
	StatusCode                int64
}
