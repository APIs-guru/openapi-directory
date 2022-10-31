package operations

import (
"time"
"openapi/pkg/models/shared")

type MeterValuesGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type MeterValuesGetQueryParams struct {
    Date time.Time `queryParam:"style=form,explode=true,name=date"`
    
}

type MeterValuesGetRequest struct {
    PathParams MeterValuesGetPathParams 
    QueryParams MeterValuesGetQueryParams 
    
}

type MeterValuesGetResponse struct {
    Body []byte 
    ContentType string 
    DeviceInPast *shared.DeviceInPast 
    StatusCode int64 
    
}

