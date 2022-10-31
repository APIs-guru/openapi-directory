package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectsGetObjectsByObjectIdsPathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type ObjectsGetObjectsByObjectIdsQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type ObjectsGetObjectsByObjectIdsRequests struct {
	GetObjectsParameters  map[string]map[string]interface{} `request:"mediaType=application/json"`
	GetObjectsParameters1 map[string]map[string]interface{} `request:"mediaType=text/json"`
}

type ObjectsGetObjectsByObjectIdsRequest struct {
	PathParams  ObjectsGetObjectsByObjectIdsPathParams
	QueryParams ObjectsGetObjectsByObjectIdsQueryParams
	Request     ObjectsGetObjectsByObjectIdsRequests
}

type ObjectsGetObjectsByObjectIdsResponse struct {
	ContentType               string
	DirectoryObjectListResult *shared.DirectoryObjectListResult
	StatusCode                int64
}
