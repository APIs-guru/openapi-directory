package operations

import (
	"openapi/pkg/models/shared"
)

type PatchPermissionPathParams struct {
	PermissionID string `pathParam:"style=simple,explode=false,name=PermissionId"`
}

type PatchPermissionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PatchPermissionRequest struct {
	PathParams PatchPermissionPathParams
	Headers    PatchPermissionHeaders
}

type PatchPermissionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Permission  *shared.Permission
	StatusCode  int64
}
