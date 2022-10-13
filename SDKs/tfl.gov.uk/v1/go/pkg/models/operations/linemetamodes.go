package operations

import (
	"openapi/pkg/models/shared"
)

type LineMetaModesResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	TflAPIPresentationEntitiesModes []shared.TflAPIPresentationEntitiesMode
}
