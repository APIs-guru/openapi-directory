package operations

import (
	"openapi/pkg/models/shared"
)

type PutPermissionPathParams struct {
	PermissionID string `pathParam:"style=simple,explode=false,name=PermissionId"`
}

type PutPermissionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PutPermissionRequest struct {
	PathParams PutPermissionPathParams
	Headers    PutPermissionHeaders
}

type PutPermissionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Permission  *shared.Permission
	StatusCode  int64
}
