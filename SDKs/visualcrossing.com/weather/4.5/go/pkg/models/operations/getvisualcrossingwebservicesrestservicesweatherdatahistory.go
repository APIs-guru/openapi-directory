package operations

var GetVisualCrossingWebServicesRestServicesWeatherdataHistoryServerList = []string{
	"https://weather.visualcrossing.com",
}

type GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams struct {
	AggregateHours              *string `queryParam:"style=form,explode=true,name=aggregateHours"`
	AllowAsynch                 *bool   `queryParam:"style=form,explode=true,name=allowAsynch"`
	CollectStationContributions *bool   `queryParam:"style=form,explode=true,name=collectStationContributions"`
	ContentType                 *string `queryParam:"style=form,explode=true,name=contentType"`
	EndDateTime                 *string `queryParam:"style=form,explode=true,name=endDateTime"`
	IncludeNormals              *bool   `queryParam:"style=form,explode=true,name=includeNormals"`
	Key                         *string `queryParam:"style=form,explode=true,name=key"`
	Locations                   *string `queryParam:"style=form,explode=true,name=locations"`
	MaxDistance                 *string `queryParam:"style=form,explode=true,name=maxDistance"`
	MaxStations                 *string `queryParam:"style=form,explode=true,name=maxStations"`
	ShortColumnNames            *bool   `queryParam:"style=form,explode=true,name=shortColumnNames"`
	StartDateTime               *string `queryParam:"style=form,explode=true,name=startDateTime"`
	UnitGroup                   *string `queryParam:"style=form,explode=true,name=unitGroup"`
}

type GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest struct {
	ServerURL   *string
	QueryParams GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams
}

type GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse struct {
	ContentType string
	StatusCode  int64
}
