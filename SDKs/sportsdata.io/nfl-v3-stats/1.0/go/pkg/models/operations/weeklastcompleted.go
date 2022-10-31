package operations



type WeekLastCompletedPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    
}

type WeekLastCompletedRequest struct {
    PathParams WeekLastCompletedPathParams 
    
}

type WeekLastCompletedResponse struct {
    ContentType string 
    StatusCode int64 
    WeekLastCompleted200ApplicationJSONInteger *int64 
    
}

