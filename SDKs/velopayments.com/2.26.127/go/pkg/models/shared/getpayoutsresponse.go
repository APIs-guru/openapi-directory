package shared

type GetPayoutsResponse struct {
	Content []PayoutSummaryAudit `json:"content"`
	Links   []interface{}        `json:"links"`
	Page    *interface{}         `json:"page"`
}
