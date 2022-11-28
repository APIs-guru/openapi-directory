package operations

import (
	"openapi/pkg/models/shared"
)

type LineStatusByModePathParams struct {
	Modes []string `pathParam:"style=simple,explode=false,name=modes"`
}

type LineStatusByModeQueryParams struct {
	Detail        *bool   `queryParam:"style=form,explode=true,name=detail"`
	SeverityLevel *string `queryParam:"style=form,explode=true,name=severityLevel"`
}

type LineStatusByModeRequest struct {
	PathParams  LineStatusByModePathParams
	QueryParams LineStatusByModeQueryParams
}

type LineStatusByModeResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	TflAPIPresentationEntitiesLines []shared.TflAPIPresentationEntitiesLine
}
