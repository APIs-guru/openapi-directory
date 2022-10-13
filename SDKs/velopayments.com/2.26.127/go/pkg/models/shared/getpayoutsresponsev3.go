package shared

type GetPayoutsResponseV3 struct {
	Content []PayoutSummaryAuditV3 `json:"content"`
	Links   []interface{}          `json:"links"`
	Page    *interface{}           `json:"page"`
}
