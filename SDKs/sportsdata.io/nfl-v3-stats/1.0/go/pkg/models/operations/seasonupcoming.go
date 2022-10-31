package operations



type SeasonUpcomingPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    
}

type SeasonUpcomingRequest struct {
    PathParams SeasonUpcomingPathParams 
    
}

type SeasonUpcomingResponse struct {
    ContentType string 
    SeasonUpcoming200ApplicationJSONInteger *int64 
    StatusCode int64 
    
}

