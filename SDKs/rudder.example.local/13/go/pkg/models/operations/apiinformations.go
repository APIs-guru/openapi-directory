package operations

import (
"openapi/pkg/models/shared")

type APIInformationsPathParams struct {
    EndpointName string `pathParam:"style=simple,explode=false,name=endpointName"`
    
}

type APIInformationsRequest struct {
    PathParams APIInformationsPathParams 
    
}


type APIInformations200ApplicationJSONActionEnum string

const (
    APIInformations200ApplicationJSONActionEnumAPIInformations APIInformations200ApplicationJSONActionEnum = "apiInformations"
)


type APIInformations200ApplicationJSONDataEndpoints struct {
    HTTPVerb *interface{} `json:"httpVerb,omitempty"`
    Version *shared.APIVersion `json:"version,omitempty"`
    
}

type APIInformations200ApplicationJSONData struct {
    Documentation string `json:"documentation"`
    EndpointName string `json:"endpointName"`
    Endpoints []APIInformations200ApplicationJSONDataEndpoints `json:"endpoints"`
    
}


type APIInformations200ApplicationJSONResultEnum string

const (
    APIInformations200ApplicationJSONResultEnumSuccess APIInformations200ApplicationJSONResultEnum = "success"
APIInformations200ApplicationJSONResultEnumError APIInformations200ApplicationJSONResultEnum = "error"
)


type APIInformations200ApplicationJSON struct {
    Action APIInformations200ApplicationJSONActionEnum `json:"action"`
    Data APIInformations200ApplicationJSONData `json:"data"`
    Result APIInformations200ApplicationJSONResultEnum `json:"result"`
    
}

type APIInformationsResponse struct {
    ContentType string 
    StatusCode int64 
    APIInformations200ApplicationJSONObject *APIInformations200ApplicationJSON 
    
}

