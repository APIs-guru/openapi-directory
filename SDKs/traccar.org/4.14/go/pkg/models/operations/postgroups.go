package operations

import (
	"openapi/pkg/models/shared"
)

type PostGroupsRequest struct {
	Request shared.Group `request:"mediaType=application/json"`
}

type PostGroupsResponse struct {
	ContentType string
	Group       *shared.Group
	StatusCode  int64
}
