package operations

import (
	"openapi/pkg/models/shared"
)

type LineDisruptionPathParams struct {
	Ids []string `pathParam:"style=simple,explode=false,name=ids"`
}

type LineDisruptionRequest struct {
	PathParams LineDisruptionPathParams
}

type LineDisruptionResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	TflAPIPresentationEntitiesDisruptions []shared.TflAPIPresentationEntitiesDisruption
}
