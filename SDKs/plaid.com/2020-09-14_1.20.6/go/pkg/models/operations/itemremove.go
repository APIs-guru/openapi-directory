package operations

import (
	"openapi/pkg/models/shared"
)

type ItemRemoveRequest struct {
	Request shared.ItemRemoveRequest `request:"mediaType=application/json"`
}

type ItemRemoveResponse struct {
	ContentType        string
	Error              map[string]interface{}
	ItemRemoveResponse map[string]interface{}
	StatusCode         int64
}
