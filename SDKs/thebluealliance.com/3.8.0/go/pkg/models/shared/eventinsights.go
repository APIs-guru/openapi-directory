package shared

// EventInsights
// A year-specific event insight object expressed as a JSON string, separated in to `qual` and `playoff` fields. See also Event_Insights_2016, Event_Insights_2017, etc.
type EventInsights struct {
	Playoff map[string]interface{} `json:"playoff,omitempty"`
	Qual    map[string]interface{} `json:"qual,omitempty"`
}
