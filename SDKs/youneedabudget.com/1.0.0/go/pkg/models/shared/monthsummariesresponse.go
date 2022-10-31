package shared

type MonthSummariesResponseData struct {
	Months          []MonthSummary `json:"months"`
	ServerKnowledge int64          `json:"server_knowledge"`
}

type MonthSummariesResponse struct {
	Data MonthSummariesResponseData `json:"data"`
}
