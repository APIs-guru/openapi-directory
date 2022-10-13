package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicationsRemoveOwnerPathParams struct {
	ApplicationObjectID string `pathParam:"style=simple,explode=false,name=applicationObjectId"`
	OwnerObjectID       string `pathParam:"style=simple,explode=false,name=ownerObjectId"`
	TenantID            string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ApplicationsRemoveOwnerQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ApplicationsRemoveOwnerRequest struct {
	PathParams  ApplicationsRemoveOwnerPathParams
	QueryParams ApplicationsRemoveOwnerQueryParams
}

type ApplicationsRemoveOwnerResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
