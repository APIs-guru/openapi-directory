package operations




type UpdatePolicies200ApplicationJSONActionEnum string

const (
    UpdatePolicies200ApplicationJSONActionEnumUpdatePolicies UpdatePolicies200ApplicationJSONActionEnum = "updatePolicies"
)



type UpdatePolicies200ApplicationJSONDataPoliciesEnum string

const (
    UpdatePolicies200ApplicationJSONDataPoliciesEnumStarted UpdatePolicies200ApplicationJSONDataPoliciesEnum = "Started"
)


type UpdatePolicies200ApplicationJSONData struct {
    Policies UpdatePolicies200ApplicationJSONDataPoliciesEnum `json:"policies"`
    
}


type UpdatePolicies200ApplicationJSONResultEnum string

const (
    UpdatePolicies200ApplicationJSONResultEnumSuccess UpdatePolicies200ApplicationJSONResultEnum = "success"
UpdatePolicies200ApplicationJSONResultEnumError UpdatePolicies200ApplicationJSONResultEnum = "error"
)


type UpdatePolicies200ApplicationJSON struct {
    Action UpdatePolicies200ApplicationJSONActionEnum `json:"action"`
    Data UpdatePolicies200ApplicationJSONData `json:"data"`
    Result UpdatePolicies200ApplicationJSONResultEnum `json:"result"`
    
}

type UpdatePoliciesResponse struct {
    ContentType string 
    StatusCode int64 
    UpdatePolicies200ApplicationJSONObject *UpdatePolicies200ApplicationJSON 
    
}

