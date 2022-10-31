package operations


var GetVisualCrossingWebServicesRestServicesWeatherdataForecastServers = []string{
	"https://weather.visualcrossing.com",
}

type GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams struct {
    AggregateHours *string `queryParam:"style=form,explode=true,name=aggregateHours"`
    AllowAsynch *bool `queryParam:"style=form,explode=true,name=allowAsynch"`
    ContentType *string `queryParam:"style=form,explode=true,name=contentType"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Locations *string `queryParam:"style=form,explode=true,name=locations"`
    SendAsDatasource *bool `queryParam:"style=form,explode=true,name=sendAsDatasource"`
    ShortColumnNames *bool `queryParam:"style=form,explode=true,name=shortColumnNames"`
    UnitGroup *string `queryParam:"style=form,explode=true,name=unitGroup"`
    
}

type GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest struct {
    ServerURL *string 
    QueryParams GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams 
    
}

type GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse struct {
    ContentType string 
    StatusCode int64 
    
}

