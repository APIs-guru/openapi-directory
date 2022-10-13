package operations

import (
	"openapi/pkg/models/shared"
)

type PostPermissionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostPermissionRequest struct {
	Headers PostPermissionHeaders
}

type PostPermissionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
