package operations

import (
"openapi/pkg/models/shared")

type MBusPostRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    MBusData *shared.MBusData `request:"mediaType=application/json"`
    MBusData1 *shared.MBusData `request:"mediaType=application/x-www-form-urlencoded"`
    MBusData2 *shared.MBusData `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type MBusPostRequest struct {
    Request MBusPostRequests 
    
}

type MBusPostResponse struct {
    Body []byte 
    ContentType string 
    Object map[string]interface{} 
    StatusCode int64 
    
}

