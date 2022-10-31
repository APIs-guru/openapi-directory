package operations



type TravelTimeGetOverlayPathParams struct {
    Height int32 `pathParam:"style=simple,explode=false,name=height"`
    MapCenterLat float64 `pathParam:"style=simple,explode=false,name=mapCenterLat"`
    MapCenterLon float64 `pathParam:"style=simple,explode=false,name=mapCenterLon"`
    PinLat float64 `pathParam:"style=simple,explode=false,name=pinLat"`
    PinLon float64 `pathParam:"style=simple,explode=false,name=pinLon"`
    Width int32 `pathParam:"style=simple,explode=false,name=width"`
    Z int32 `pathParam:"style=simple,explode=false,name=z"`
    
}


type TravelTimeGetOverlayDirectionEnum string

const (
    TravelTimeGetOverlayDirectionEnumAverage TravelTimeGetOverlayDirectionEnum = "Average"
TravelTimeGetOverlayDirectionEnumFrom TravelTimeGetOverlayDirectionEnum = "From"
TravelTimeGetOverlayDirectionEnumTo TravelTimeGetOverlayDirectionEnum = "To"
)


type TravelTimeGetOverlayQueryParams struct {
    Direction TravelTimeGetOverlayDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    ModeID string `queryParam:"style=form,explode=true,name=modeId"`
    ScenarioTitle string `queryParam:"style=form,explode=true,name=scenarioTitle"`
    TimeOfDayID string `queryParam:"style=form,explode=true,name=timeOfDayId"`
    TravelTimeInterval int32 `queryParam:"style=form,explode=true,name=travelTimeInterval"`
    
}

type TravelTimeGetOverlayRequest struct {
    PathParams TravelTimeGetOverlayPathParams 
    QueryParams TravelTimeGetOverlayQueryParams 
    
}

type TravelTimeGetOverlayResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

