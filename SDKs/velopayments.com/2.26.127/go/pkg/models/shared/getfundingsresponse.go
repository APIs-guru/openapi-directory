package shared

type GetFundingsResponse struct {
	Content []FundingAudit `json:"content"`
	Links   []interface{}  `json:"links"`
	Page    *interface{}   `json:"page"`
}
