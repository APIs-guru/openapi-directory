package operations



type GetAdminScenarios200ApplicationJSONScenarios struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    PossibleStates []string `json:"possibleStates,omitempty"`
    State *string `json:"state,omitempty"`
    
}

type GetAdminScenarios200ApplicationJSON struct {
    Scenarios []GetAdminScenarios200ApplicationJSONScenarios `json:"scenarios,omitempty"`
    
}

type GetAdminScenariosResponse struct {
    ContentType string 
    GetAdminScenarios200ApplicationJSONObject *GetAdminScenarios200ApplicationJSON 
    StatusCode int64 
    
}

