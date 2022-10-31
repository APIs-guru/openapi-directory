package operations

import (
	"openapi/pkg/models/shared"
)

type LineStatusBySeverityPathParams struct {
	Severity int32 `pathParam:"style=simple,explode=false,name=severity"`
}

type LineStatusBySeverityRequest struct {
	PathParams LineStatusBySeverityPathParams
}

type LineStatusBySeverityResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	TflAPIPresentationEntitiesLines []shared.TflAPIPresentationEntitiesLine
}
