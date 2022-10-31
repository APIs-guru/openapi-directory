package operations

import (
	"openapi/pkg/models/shared"
)

type PublishExtensionHeaders struct {
	TmpsCorrelationID string `header:"style=simple,explode=false,name=TMPS-Correlation-Id"`
}

type PublishExtensionRequest struct {
	Headers PublishExtensionHeaders
	Request shared.ExtensionData `request:"mediaType=application/json"`
}

type PublishExtensionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
