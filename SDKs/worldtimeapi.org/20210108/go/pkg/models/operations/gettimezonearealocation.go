package operations



type GetTimezoneAreaLocationPathParams struct {
    Area string `pathParam:"style=simple,explode=false,name=area"`
    Location string `pathParam:"style=simple,explode=false,name=location"`
    
}

type GetTimezoneAreaLocationRequest struct {
    PathParams GetTimezoneAreaLocationPathParams 
    
}

type GetTimezoneAreaLocationResponse struct {
    ContentType string 
    DateTimeJSONResponse *interface{} 
    ErrorJSONResponse *interface{} 
    StatusCode int64 
    
}

