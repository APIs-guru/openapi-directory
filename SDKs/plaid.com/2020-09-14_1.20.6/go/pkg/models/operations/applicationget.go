package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicationGetRequest struct {
	Request shared.ApplicationGetRequest `request:"mediaType=application/json"`
}

type ApplicationGetResponse struct {
	ApplicationGetResponse *shared.ApplicationGetResponse
	ContentType            string
	Error                  map[string]interface{}
	StatusCode             int64
}
