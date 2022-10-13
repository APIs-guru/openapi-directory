package shared

type EventInsights struct {
	Playoff map[string]interface{} `json:"playoff"`
	Qual    map[string]interface{} `json:"qual"`
}
