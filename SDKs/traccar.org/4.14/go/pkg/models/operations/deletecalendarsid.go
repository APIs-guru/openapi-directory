package operations



type DeleteCalendarsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteCalendarsIDRequest struct {
    PathParams DeleteCalendarsIDPathParams 
    
}

type DeleteCalendarsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

