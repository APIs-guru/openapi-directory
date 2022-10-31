package operations

import (
"openapi/pkg/models/shared")


type GetAllCve200ApplicationJSONActionEnum string

const (
    GetAllCve200ApplicationJSONActionEnumGetAllCve GetAllCve200ApplicationJSONActionEnum = "getAllCve"
)


type GetAllCve200ApplicationJSONData struct {
    CvEs []shared.CveDetails `json:"CVEs"`
    
}


type GetAllCve200ApplicationJSONResultEnum string

const (
    GetAllCve200ApplicationJSONResultEnumSuccess GetAllCve200ApplicationJSONResultEnum = "success"
GetAllCve200ApplicationJSONResultEnumError GetAllCve200ApplicationJSONResultEnum = "error"
)


type GetAllCve200ApplicationJSON struct {
    Action GetAllCve200ApplicationJSONActionEnum `json:"action"`
    Data GetAllCve200ApplicationJSONData `json:"data"`
    Result GetAllCve200ApplicationJSONResultEnum `json:"result"`
    
}

type GetAllCveResponse struct {
    ContentType string 
    StatusCode int64 
    GetAllCve200ApplicationJSONObject *GetAllCve200ApplicationJSON 
    
}

