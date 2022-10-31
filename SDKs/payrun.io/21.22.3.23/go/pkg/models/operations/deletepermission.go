package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePermissionPathParams struct {
	PermissionID string `pathParam:"style=simple,explode=false,name=PermissionId"`
}

type DeletePermissionHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeletePermissionRequest struct {
	PathParams DeletePermissionPathParams
	Headers    DeletePermissionHeaders
}

type DeletePermissionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
