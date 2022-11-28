package operations

import (
	"openapi/pkg/models/shared"
)

type LineGetPathParams struct {
	Ids []string `pathParam:"style=simple,explode=false,name=ids"`
}

type LineGetRequest struct {
	PathParams LineGetPathParams
}

type LineGetResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	TflAPIPresentationEntitiesLines []shared.TflAPIPresentationEntitiesLine
}
