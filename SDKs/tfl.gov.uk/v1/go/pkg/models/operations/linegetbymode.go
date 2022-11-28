package operations

import (
	"openapi/pkg/models/shared"
)

type LineGetByModePathParams struct {
	Modes []string `pathParam:"style=simple,explode=false,name=modes"`
}

type LineGetByModeRequest struct {
	PathParams LineGetByModePathParams
}

type LineGetByModeResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	TflAPIPresentationEntitiesLines []shared.TflAPIPresentationEntitiesLine
}
