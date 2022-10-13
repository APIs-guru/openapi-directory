package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointGetByGeoPointQueryParams struct {
	Categories            []string `queryParam:"style=form,explode=true,name=categories"`
	LocationLat           float64  `queryParam:"style=form,explode=true,name=location.lat"`
	LocationLon           float64  `queryParam:"style=form,explode=true,name=location.lon"`
	Modes                 []string `queryParam:"style=form,explode=true,name=modes"`
	Radius                *int32   `queryParam:"style=form,explode=true,name=radius"`
	ReturnLines           *bool    `queryParam:"style=form,explode=true,name=returnLines"`
	StopTypes             []string `queryParam:"style=form,explode=true,name=stopTypes"`
	UseStopPointHierarchy *bool    `queryParam:"style=form,explode=true,name=useStopPointHierarchy"`
}

type StopPointGetByGeoPointRequest struct {
	QueryParams StopPointGetByGeoPointQueryParams
}

type StopPointGetByGeoPointResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	TflAPIPresentationEntitiesStopPointsResponse *shared.TflAPIPresentationEntitiesStopPointsResponse
}
