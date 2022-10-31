package operations



type PromoteToRelayPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    
}

type PromoteToRelayRequest struct {
    PathParams PromoteToRelayPathParams 
    
}


type PromoteToRelay200ApplicationJSONActionEnum string

const (
    PromoteToRelay200ApplicationJSONActionEnumPromoteToRelay PromoteToRelay200ApplicationJSONActionEnum = "promoteToRelay"
)



type PromoteToRelay200ApplicationJSONResultEnum string

const (
    PromoteToRelay200ApplicationJSONResultEnumSuccess PromoteToRelay200ApplicationJSONResultEnum = "success"
PromoteToRelay200ApplicationJSONResultEnumError PromoteToRelay200ApplicationJSONResultEnum = "error"
)


type PromoteToRelay200ApplicationJSON struct {
    Action PromoteToRelay200ApplicationJSONActionEnum `json:"action"`
    Data string `json:"data"`
    Result PromoteToRelay200ApplicationJSONResultEnum `json:"result"`
    
}

type PromoteToRelayResponse struct {
    ContentType string 
    StatusCode int64 
    PromoteToRelay200ApplicationJSONObject *PromoteToRelay200ApplicationJSON 
    
}

