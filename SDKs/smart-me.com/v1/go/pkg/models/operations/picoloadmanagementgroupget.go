package operations

import (
	"openapi/pkg/models/shared"
)

type PicoLoadmanagementGroupGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PicoLoadmanagementGroupGetRequest struct {
	PathParams PicoLoadmanagementGroupGetPathParams
}

type PicoLoadmanagementGroupGetResponse struct {
	Body                       []byte
	ContentType                string
	PicoLoadmanagementGroupDto *shared.PicoLoadmanagementGroupDto
	StatusCode                 int64
}
