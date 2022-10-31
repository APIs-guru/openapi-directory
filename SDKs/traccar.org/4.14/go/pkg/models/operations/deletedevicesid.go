package operations



type DeleteDevicesIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteDevicesIDRequest struct {
    PathParams DeleteDevicesIDPathParams 
    
}

type DeleteDevicesIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

