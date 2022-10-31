package operations

import (
	"openapi/pkg/models/shared"
)

type LineMetaSeverityResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	TflAPIPresentationEntitiesStatusSeverities []shared.TflAPIPresentationEntitiesStatusSeverity
}
