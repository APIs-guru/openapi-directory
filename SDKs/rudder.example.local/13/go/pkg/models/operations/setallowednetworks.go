package operations



type SetAllowedNetworksPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    
}

type SetAllowedNetworksRequestBody struct {
    Value map[string]interface{} `json:"value,omitempty"`
    
}

type SetAllowedNetworksRequest struct {
    PathParams SetAllowedNetworksPathParams 
    Request SetAllowedNetworksRequestBody `request:"mediaType=application/json"`
    
}


type SetAllowedNetworks200ApplicationJSONActionEnum string

const (
    SetAllowedNetworks200ApplicationJSONActionEnumModifyAllowedNetworks SetAllowedNetworks200ApplicationJSONActionEnum = "modifyAllowedNetworks"
)


type SetAllowedNetworks200ApplicationJSONData struct {
    AllowedNetworks []interface{} `json:"allowed_networks,omitempty"`
    
}


type SetAllowedNetworks200ApplicationJSONResultEnum string

const (
    SetAllowedNetworks200ApplicationJSONResultEnumSuccess SetAllowedNetworks200ApplicationJSONResultEnum = "success"
SetAllowedNetworks200ApplicationJSONResultEnumError SetAllowedNetworks200ApplicationJSONResultEnum = "error"
)


type SetAllowedNetworks200ApplicationJSON struct {
    Action SetAllowedNetworks200ApplicationJSONActionEnum `json:"action"`
    Data SetAllowedNetworks200ApplicationJSONData `json:"data"`
    ID *string `json:"id,omitempty"`
    Result SetAllowedNetworks200ApplicationJSONResultEnum `json:"result"`
    
}

type SetAllowedNetworksResponse struct {
    ContentType string 
    StatusCode int64 
    SetAllowedNetworks200ApplicationJSONObject *SetAllowedNetworks200ApplicationJSON 
    
}

