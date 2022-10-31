package operations

import (
	"openapi/pkg/models/shared"
)

type ItemGetRequest struct {
	Request shared.ItemGetRequest `request:"mediaType=application/json"`
}

type ItemGetResponse struct {
	ContentType     string
	Error           map[string]interface{}
	ItemGetResponse map[string]interface{}
	StatusCode      int64
}
