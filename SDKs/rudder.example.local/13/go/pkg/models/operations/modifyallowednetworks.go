package operations



type ModifyAllowedNetworksPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    
}

type ModifyAllowedNetworksRequestBodyAllowedNetworks struct {
    Add []interface{} `json:"add,omitempty"`
    Delete []interface{} `json:"delete,omitempty"`
    
}

type ModifyAllowedNetworksRequestBody struct {
    AllowedNetworks *ModifyAllowedNetworksRequestBodyAllowedNetworks `json:"allowed_networks,omitempty"`
    
}

type ModifyAllowedNetworksRequest struct {
    PathParams ModifyAllowedNetworksPathParams 
    Request ModifyAllowedNetworksRequestBody `request:"mediaType=application/json"`
    
}


type ModifyAllowedNetworks200ApplicationJSONActionEnum string

const (
    ModifyAllowedNetworks200ApplicationJSONActionEnumModifySetting ModifyAllowedNetworks200ApplicationJSONActionEnum = "modifySetting"
)


type ModifyAllowedNetworks200ApplicationJSONData struct {
    AllowedNetworks []interface{} `json:"allowed_networks,omitempty"`
    
}


type ModifyAllowedNetworks200ApplicationJSONResultEnum string

const (
    ModifyAllowedNetworks200ApplicationJSONResultEnumSuccess ModifyAllowedNetworks200ApplicationJSONResultEnum = "success"
ModifyAllowedNetworks200ApplicationJSONResultEnumError ModifyAllowedNetworks200ApplicationJSONResultEnum = "error"
)


type ModifyAllowedNetworks200ApplicationJSON struct {
    Action ModifyAllowedNetworks200ApplicationJSONActionEnum `json:"action"`
    Data ModifyAllowedNetworks200ApplicationJSONData `json:"data"`
    Result ModifyAllowedNetworks200ApplicationJSONResultEnum `json:"result"`
    
}

type ModifyAllowedNetworksResponse struct {
    ContentType string 
    StatusCode int64 
    ModifyAllowedNetworks200ApplicationJSONObject *ModifyAllowedNetworks200ApplicationJSON 
    
}

