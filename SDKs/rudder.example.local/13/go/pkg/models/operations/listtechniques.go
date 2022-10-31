package operations

import (
"openapi/pkg/models/shared")


type ListTechniques200ApplicationJSONActionEnum string

const (
    ListTechniques200ApplicationJSONActionEnumListTechniques ListTechniques200ApplicationJSONActionEnum = "listTechniques"
)


type ListTechniques200ApplicationJSONData struct {
    Techniques []shared.Techniques `json:"techniques"`
    
}


type ListTechniques200ApplicationJSONResultEnum string

const (
    ListTechniques200ApplicationJSONResultEnumSuccess ListTechniques200ApplicationJSONResultEnum = "success"
ListTechniques200ApplicationJSONResultEnumError ListTechniques200ApplicationJSONResultEnum = "error"
)


type ListTechniques200ApplicationJSON struct {
    Action ListTechniques200ApplicationJSONActionEnum `json:"action"`
    Data ListTechniques200ApplicationJSONData `json:"data"`
    Result ListTechniques200ApplicationJSONResultEnum `json:"result"`
    
}

type ListTechniquesResponse struct {
    ContentType string 
    StatusCode int64 
    ListTechniques200ApplicationJSONObject *ListTechniques200ApplicationJSON 
    
}

