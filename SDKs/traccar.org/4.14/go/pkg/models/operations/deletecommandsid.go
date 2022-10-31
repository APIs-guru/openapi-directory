package operations



type DeleteCommandsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteCommandsIDRequest struct {
    PathParams DeleteCommandsIDPathParams 
    
}

type DeleteCommandsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

