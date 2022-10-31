package operations

import (
"openapi/pkg/models/shared")

type ParameterDetailsPathParams struct {
    ParameterID string `pathParam:"style=simple,explode=false,name=parameterId"`
    
}

type ParameterDetailsRequest struct {
    PathParams ParameterDetailsPathParams 
    
}


type ParameterDetails200ApplicationJSONActionEnum string

const (
    ParameterDetails200ApplicationJSONActionEnumParameterDetails ParameterDetails200ApplicationJSONActionEnum = "parameterDetails"
)


type ParameterDetails200ApplicationJSONData struct {
    Parameters []shared.Parameter `json:"parameters"`
    
}


type ParameterDetails200ApplicationJSONResultEnum string

const (
    ParameterDetails200ApplicationJSONResultEnumSuccess ParameterDetails200ApplicationJSONResultEnum = "success"
ParameterDetails200ApplicationJSONResultEnumError ParameterDetails200ApplicationJSONResultEnum = "error"
)


type ParameterDetails200ApplicationJSON struct {
    Action ParameterDetails200ApplicationJSONActionEnum `json:"action"`
    Data ParameterDetails200ApplicationJSONData `json:"data"`
    ID string `json:"id"`
    Result ParameterDetails200ApplicationJSONResultEnum `json:"result"`
    
}

type ParameterDetailsResponse struct {
    ContentType string 
    StatusCode int64 
    ParameterDetails200ApplicationJSONObject *ParameterDetails200ApplicationJSON 
    
}

