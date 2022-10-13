package operations

import (
	"openapi/pkg/models/shared"
)

type PublishEntitlementsHeaders struct {
	TmpsCorrelationID string `header:"name=TMPS-Correlation-Id"`
}

type PublishEntitlementsRequest struct {
	Headers PublishEntitlementsHeaders
	Request shared.Entitlement `request:"mediaType=application/json"`
}

type PublishEntitlementsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
