package operations



type TravelTimeGetCompareOverlayPathParams struct {
    Height int32 `pathParam:"style=simple,explode=false,name=height"`
    MapCenterLat float64 `pathParam:"style=simple,explode=false,name=mapCenterLat"`
    MapCenterLon float64 `pathParam:"style=simple,explode=false,name=mapCenterLon"`
    PinLat float64 `pathParam:"style=simple,explode=false,name=pinLat"`
    PinLon float64 `pathParam:"style=simple,explode=false,name=pinLon"`
    Width int32 `pathParam:"style=simple,explode=false,name=width"`
    Z int32 `pathParam:"style=simple,explode=false,name=z"`
    
}


type TravelTimeGetCompareOverlayDirectionEnum string

const (
    TravelTimeGetCompareOverlayDirectionEnumAverage TravelTimeGetCompareOverlayDirectionEnum = "Average"
TravelTimeGetCompareOverlayDirectionEnumFrom TravelTimeGetCompareOverlayDirectionEnum = "From"
TravelTimeGetCompareOverlayDirectionEnumTo TravelTimeGetCompareOverlayDirectionEnum = "To"
)


type TravelTimeGetCompareOverlayQueryParams struct {
    CompareType string `queryParam:"style=form,explode=true,name=compareType"`
    CompareValue string `queryParam:"style=form,explode=true,name=compareValue"`
    Direction TravelTimeGetCompareOverlayDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    ModeID string `queryParam:"style=form,explode=true,name=modeId"`
    ScenarioTitle string `queryParam:"style=form,explode=true,name=scenarioTitle"`
    TimeOfDayID string `queryParam:"style=form,explode=true,name=timeOfDayId"`
    TravelTimeInterval int32 `queryParam:"style=form,explode=true,name=travelTimeInterval"`
    
}

type TravelTimeGetCompareOverlayRequest struct {
    PathParams TravelTimeGetCompareOverlayPathParams 
    QueryParams TravelTimeGetCompareOverlayQueryParams 
    
}

type TravelTimeGetCompareOverlayResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

