package operations

import (
"openapi/pkg/models/shared")

type GetCveListRequestBody struct {
    CveIds []string `json:"cveIds,omitempty"`
    
}

type GetCveListRequest struct {
    Request *GetCveListRequestBody `request:"mediaType=application/json"`
    
}


type GetCveList200ApplicationJSONActionEnum string

const (
    GetCveList200ApplicationJSONActionEnumGetCveList GetCveList200ApplicationJSONActionEnum = "getCVEList"
)


type GetCveList200ApplicationJSONData struct {
    CvEs []shared.CveDetails `json:"CVEs"`
    
}


type GetCveList200ApplicationJSONResultEnum string

const (
    GetCveList200ApplicationJSONResultEnumSuccess GetCveList200ApplicationJSONResultEnum = "success"
GetCveList200ApplicationJSONResultEnumError GetCveList200ApplicationJSONResultEnum = "error"
)


type GetCveList200ApplicationJSON struct {
    Action GetCveList200ApplicationJSONActionEnum `json:"action"`
    Data GetCveList200ApplicationJSONData `json:"data"`
    Result GetCveList200ApplicationJSONResultEnum `json:"result"`
    
}

type GetCveListResponse struct {
    ContentType string 
    StatusCode int64 
    GetCveList200ApplicationJSONObject *GetCveList200ApplicationJSON 
    
}

