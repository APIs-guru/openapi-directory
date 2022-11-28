package operations

import (
	"openapi/pkg/models/shared"
)

type LineDisruptionByModePathParams struct {
	Modes []string `pathParam:"style=simple,explode=false,name=modes"`
}

type LineDisruptionByModeRequest struct {
	PathParams LineDisruptionByModePathParams
}

type LineDisruptionByModeResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	TflAPIPresentationEntitiesDisruptions []shared.TflAPIPresentationEntitiesDisruption
}
