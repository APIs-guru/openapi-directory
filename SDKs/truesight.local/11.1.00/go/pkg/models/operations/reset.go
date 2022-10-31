package operations



type ResetPathParams struct {
    DeviceID int32 `pathParam:"style=simple,explode=false,name=deviceId"`
    
}

type ResetQueryParams struct {
    MonitorClass string `queryParam:"style=form,explode=true,name=monitorClass"`
    MonitorSid string `queryParam:"style=form,explode=true,name=monitorSid"`
    
}

type ResetRequest struct {
    PathParams ResetPathParams 
    QueryParams ResetQueryParams 
    
}

type ResetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

