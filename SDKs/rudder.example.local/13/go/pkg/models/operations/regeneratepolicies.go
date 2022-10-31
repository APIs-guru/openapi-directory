package operations




type RegeneratePolicies200ApplicationJSONActionEnum string

const (
    RegeneratePolicies200ApplicationJSONActionEnumRegeneratePolicies RegeneratePolicies200ApplicationJSONActionEnum = "regeneratePolicies"
)



type RegeneratePolicies200ApplicationJSONDataPoliciesEnum string

const (
    RegeneratePolicies200ApplicationJSONDataPoliciesEnumStarted RegeneratePolicies200ApplicationJSONDataPoliciesEnum = "Started"
)


type RegeneratePolicies200ApplicationJSONData struct {
    Policies RegeneratePolicies200ApplicationJSONDataPoliciesEnum `json:"policies"`
    
}


type RegeneratePolicies200ApplicationJSONResultEnum string

const (
    RegeneratePolicies200ApplicationJSONResultEnumSuccess RegeneratePolicies200ApplicationJSONResultEnum = "success"
RegeneratePolicies200ApplicationJSONResultEnumError RegeneratePolicies200ApplicationJSONResultEnum = "error"
)


type RegeneratePolicies200ApplicationJSON struct {
    Action RegeneratePolicies200ApplicationJSONActionEnum `json:"action"`
    Data RegeneratePolicies200ApplicationJSONData `json:"data"`
    Result RegeneratePolicies200ApplicationJSONResultEnum `json:"result"`
    
}

type RegeneratePoliciesResponse struct {
    ContentType string 
    StatusCode int64 
    RegeneratePolicies200ApplicationJSONObject *RegeneratePolicies200ApplicationJSON 
    
}

