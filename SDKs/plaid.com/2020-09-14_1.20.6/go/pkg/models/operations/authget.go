package operations

import (
	"openapi/pkg/models/shared"
)

type AuthGetRequest struct {
	Request shared.AuthGetRequest `request:"mediaType=application/json"`
}

type AuthGetResponse struct {
	AuthGetResponse map[string]interface{}
	ContentType     string
	Error           map[string]interface{}
	StatusCode      int64
}
