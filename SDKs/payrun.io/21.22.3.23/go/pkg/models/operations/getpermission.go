package operations

import (
	"openapi/pkg/models/shared"
)

type GetPermissionPathParams struct {
	PermissionID string `pathParam:"style=simple,explode=false,name=PermissionId"`
}

type GetPermissionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetPermissionRequest struct {
	PathParams GetPermissionPathParams
	Headers    GetPermissionHeaders
}

type GetPermissionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Permission  *shared.Permission
	StatusCode  int64
}
