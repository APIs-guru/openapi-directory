package operations

import (
	"openapi/pkg/models/shared"
)

type PublishEventVideosPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PublishEventVideosHeaders struct {
	TmpsCorrelationID string `header:"style=simple,explode=false,name=TMPS-Correlation-Id"`
}

type PublishEventVideosRequest struct {
	PathParams PublishEventVideosPathParams
	Headers    PublishEventVideosHeaders
	Request    shared.Video `request:"mediaType=application/json"`
}

type PublishEventVideosResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
