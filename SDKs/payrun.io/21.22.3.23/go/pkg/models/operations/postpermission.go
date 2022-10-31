package operations

import (
	"openapi/pkg/models/shared"
)

type PostPermissionHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
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
