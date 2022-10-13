package operations

import (
	"openapi/pkg/models/shared"
)

type PatchEventPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchEventHeaders struct {
	TmpsCorrelationID string `header:"name=TMPS-Correlation-Id"`
}

type PatchEventRequest struct {
	PathParams PatchEventPathParams
	Headers    PatchEventHeaders
	Request    shared.AugmentationData `request:"mediaType=application/json"`
}

type PatchEventResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
