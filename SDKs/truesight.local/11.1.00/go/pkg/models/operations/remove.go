package operations



type RemovePathParams struct {
    DeviceID int32 `pathParam:"style=simple,explode=false,name=deviceId"`
    
}

type RemoveQueryParams struct {
    MonitorClass string `queryParam:"style=form,explode=true,name=monitorClass"`
    MonitorSid string `queryParam:"style=form,explode=true,name=monitorSid"`
    
}

type RemoveRequest struct {
    PathParams RemovePathParams 
    QueryParams RemoveQueryParams 
    
}

type RemoveResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

