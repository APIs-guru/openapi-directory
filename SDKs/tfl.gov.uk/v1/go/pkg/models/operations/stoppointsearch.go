package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointSearchPathParams struct {
	Query string `pathParam:"style=simple,explode=false,name=query"`
}

type StopPointSearchQueryParams struct {
	FaresOnly                           *bool    `queryParam:"style=form,explode=true,name=faresOnly"`
	IncludeHubs                         *bool    `queryParam:"style=form,explode=true,name=includeHubs"`
	Lines                               []string `queryParam:"style=form,explode=true,name=lines"`
	MaxResults                          *int32   `queryParam:"style=form,explode=true,name=maxResults"`
	Modes                               []string `queryParam:"style=form,explode=true,name=modes"`
	TflOperatedNationalRailStationsOnly *bool    `queryParam:"style=form,explode=true,name=tflOperatedNationalRailStationsOnly"`
}

type StopPointSearchRequest struct {
	PathParams  StopPointSearchPathParams
	QueryParams StopPointSearchQueryParams
}

type StopPointSearchResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	TflAPIPresentationEntitiesSearchResponse *shared.TflAPIPresentationEntitiesSearchResponse
}
