package operations

import (
	"openapi/pkg/models/shared"
)

type PublishAttractionVideosPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PublishAttractionVideosHeaders struct {
	TmpsCorrelationID string `header:"name=TMPS-Correlation-Id"`
}

type PublishAttractionVideosRequest struct {
	PathParams PublishAttractionVideosPathParams
	Headers    PublishAttractionVideosHeaders
	Request    shared.Video `request:"mediaType=application/json"`
}

type PublishAttractionVideosResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
