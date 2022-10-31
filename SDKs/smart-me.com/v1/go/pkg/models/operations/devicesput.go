package operations



type DevicesPutPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DevicesPutQueryParams struct {
    SwitchNumber *int32 `queryParam:"style=form,explode=true,name=switchNumber"`
    SwitchState bool `queryParam:"style=form,explode=true,name=switchState"`
    
}

type DevicesPutRequest struct {
    PathParams DevicesPutPathParams 
    QueryParams DevicesPutQueryParams 
    
}

type DevicesPutResponse struct {
    Body []byte 
    ContentType string 
    Object map[string]interface{} 
    StatusCode int64 
    
}

