package operations

type GetAdminScenarios200ApplicationJSONScenarios struct {
	ID             *string  `json:"id"`
	Name           *string  `json:"name"`
	PossibleStates []string `json:"possibleStates"`
	State          *string  `json:"state"`
}

type GetAdminScenarios200ApplicationJSON struct {
	Scenarios []GetAdminScenarios200ApplicationJSONScenarios `json:"scenarios"`
}

type GetAdminScenariosResponse struct {
	ContentType                               string
	GetAdminScenarios200ApplicationJSONObject *GetAdminScenarios200ApplicationJSON
	StatusCode                                int64
}
