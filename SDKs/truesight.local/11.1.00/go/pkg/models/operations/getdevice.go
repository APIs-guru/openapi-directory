package operations



type GetDevicePathParams struct {
    DeviceID int32 `pathParam:"style=simple,explode=false,name=deviceId"`
    
}

type GetDeviceRequest struct {
    PathParams GetDevicePathParams 
    
}

type GetDeviceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

