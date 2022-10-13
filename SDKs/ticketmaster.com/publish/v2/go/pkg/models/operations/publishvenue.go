package operations

import (
	"openapi/pkg/models/shared"
)

type PublishVenueHeaders struct {
	TmpsCorrelationID string `header:"name=TMPS-Correlation-Id"`
}

type PublishVenueRequest struct {
	Headers PublishVenueHeaders
	Request shared.Venue `request:"mediaType=application/json"`
}

type PublishVenueResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
