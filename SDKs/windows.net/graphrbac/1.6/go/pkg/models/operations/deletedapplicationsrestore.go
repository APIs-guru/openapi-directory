package operations

import (
	"openapi/pkg/models/shared"
)

type DeletedApplicationsRestorePathParams struct {
	ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type DeletedApplicationsRestoreQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type DeletedApplicationsRestoreRequest struct {
	PathParams  DeletedApplicationsRestorePathParams
	QueryParams DeletedApplicationsRestoreQueryParams
}

type DeletedApplicationsRestoreResponse struct {
	Application map[string]map[string]interface{}
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
}
