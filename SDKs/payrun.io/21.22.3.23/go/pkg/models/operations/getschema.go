package operations

import (
"openapi/pkg/models/shared")

type GetSchemaPathParams struct {
    DtoDataType string `pathParam:"style=simple,explode=false,name=DtoDataType"`
    
}

type GetSchemaHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetSchemaRequest struct {
    PathParams GetSchemaPathParams 
    Headers GetSchemaHeaders 
    
}

type GetSchemaResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    GetSchema200ApplicationJSONBinaryString []byte 
    StatusCode int64 
    
}

