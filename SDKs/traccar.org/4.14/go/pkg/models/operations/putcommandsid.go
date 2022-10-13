package operations

import (
	"openapi/pkg/models/shared"
)

type PutCommandsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutCommandsIDRequest struct {
	PathParams PutCommandsIDPathParams
	Request    shared.Command `request:"mediaType=application/json"`
}

type PutCommandsIDResponse struct {
	Command     *shared.Command
	ContentType string
	StatusCode  int64
}
