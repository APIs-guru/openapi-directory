package operations

import (
	"openapi/pkg/models/shared"
)

type SignedInUserListOwnedObjectsPathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type SignedInUserListOwnedObjectsQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type SignedInUserListOwnedObjectsRequest struct {
	PathParams  SignedInUserListOwnedObjectsPathParams
	QueryParams SignedInUserListOwnedObjectsQueryParams
}

type SignedInUserListOwnedObjectsResponse struct {
	ContentType               string
	DirectoryObjectListResult *shared.DirectoryObjectListResult
	GraphError                *shared.GraphError
	StatusCode                int64
}
