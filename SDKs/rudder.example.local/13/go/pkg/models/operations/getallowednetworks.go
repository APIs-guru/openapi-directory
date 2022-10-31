package operations



type GetAllowedNetworksPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    
}

type GetAllowedNetworksRequest struct {
    PathParams GetAllowedNetworksPathParams 
    
}


type GetAllowedNetworks200ApplicationJSONActionEnum string

const (
    GetAllowedNetworks200ApplicationJSONActionEnumGetAllowedNetworks GetAllowedNetworks200ApplicationJSONActionEnum = "getAllowedNetworks"
)


type GetAllowedNetworks200ApplicationJSONDataSettings struct {
    AllowedNetworks []interface{} `json:"allowed_networks"`
    
}

type GetAllowedNetworks200ApplicationJSONData struct {
    Settings GetAllowedNetworks200ApplicationJSONDataSettings `json:"settings"`
    
}


type GetAllowedNetworks200ApplicationJSONResultEnum string

const (
    GetAllowedNetworks200ApplicationJSONResultEnumSuccess GetAllowedNetworks200ApplicationJSONResultEnum = "success"
GetAllowedNetworks200ApplicationJSONResultEnumError GetAllowedNetworks200ApplicationJSONResultEnum = "error"
)


type GetAllowedNetworks200ApplicationJSON struct {
    Action GetAllowedNetworks200ApplicationJSONActionEnum `json:"action"`
    Data GetAllowedNetworks200ApplicationJSONData `json:"data"`
    ID string `json:"id"`
    Result GetAllowedNetworks200ApplicationJSONResultEnum `json:"result"`
    
}

type GetAllowedNetworksResponse struct {
    ContentType string 
    StatusCode int64 
    GetAllowedNetworks200ApplicationJSONObject *GetAllowedNetworks200ApplicationJSON 
    
}

