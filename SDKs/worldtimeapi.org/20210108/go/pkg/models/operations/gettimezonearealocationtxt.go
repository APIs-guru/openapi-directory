package operations



type GetTimezoneAreaLocationTxtPathParams struct {
    Area string `pathParam:"style=simple,explode=false,name=area"`
    Location string `pathParam:"style=simple,explode=false,name=location"`
    
}

type GetTimezoneAreaLocationTxtRequest struct {
    PathParams GetTimezoneAreaLocationTxtPathParams 
    
}

type GetTimezoneAreaLocationTxtResponse struct {
    ContentType string 
    DateTimeTextResponse *string 
    ErrorTextResponse *string 
    StatusCode int64 
    
}

