package operations

import (
	"openapi/pkg/models/shared"
)

type TransformInputRequestBody struct {
	JSON *shared.SeldonMessage `form:"name=json,json"`
}

type TransformInputRequest struct {
	Request TransformInputRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type TransformInputResponse struct {
	ContentType   string
	SeldonMessage *shared.SeldonMessage
	StatusCode    int64
}
