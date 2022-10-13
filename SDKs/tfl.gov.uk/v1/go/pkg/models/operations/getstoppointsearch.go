package operations

import (
	"openapi/pkg/models/shared"
)

type GetStopPointSearchQueryParams struct {
	FaresOnly                           *bool    `queryParam:"style=form,explode=true,name=faresOnly"`
	IncludeHubs                         *bool    `queryParam:"style=form,explode=true,name=includeHubs"`
	Lines                               []string `queryParam:"style=form,explode=true,name=lines"`
	MaxResults                          *int32   `queryParam:"style=form,explode=true,name=maxResults"`
	Modes                               []string `queryParam:"style=form,explode=true,name=modes"`
	Query                               string   `queryParam:"style=form,explode=true,name=query"`
	TflOperatedNationalRailStationsOnly *bool    `queryParam:"style=form,explode=true,name=tflOperatedNationalRailStationsOnly"`
}

type GetStopPointSearchRequest struct {
	QueryParams GetStopPointSearchQueryParams
}

type GetStopPointSearchResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	TflAPIPresentationEntitiesSearchResponse *shared.TflAPIPresentationEntitiesSearchResponse
}
