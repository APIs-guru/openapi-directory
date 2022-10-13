package operations

import (
	"openapi/pkg/models/shared"
)

type GroupsRemoveOwnerPathParams struct {
	ObjectID      string `pathParam:"style=simple,explode=false,name=objectId"`
	OwnerObjectID string `pathParam:"style=simple,explode=false,name=ownerObjectId"`
	TenantID      string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type GroupsRemoveOwnerQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type GroupsRemoveOwnerRequest struct {
	PathParams  GroupsRemoveOwnerPathParams
	QueryParams GroupsRemoveOwnerQueryParams
}

type GroupsRemoveOwnerResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
