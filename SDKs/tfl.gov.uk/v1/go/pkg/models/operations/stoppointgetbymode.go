package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointGetByModePathParams struct {
	Modes []string `pathParam:"style=simple,explode=false,name=modes"`
}

type StopPointGetByModeQueryParams struct {
	Page *int32 `queryParam:"style=form,explode=true,name=page"`
}

type StopPointGetByModeRequest struct {
	PathParams  StopPointGetByModePathParams
	QueryParams StopPointGetByModeQueryParams
}

type StopPointGetByModeResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	TflAPIPresentationEntitiesStopPointsResponse *shared.TflAPIPresentationEntitiesStopPointsResponse
}
