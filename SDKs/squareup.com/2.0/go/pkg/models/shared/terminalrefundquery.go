package shared

type TerminalRefundQuery struct {
	Filter *TerminalRefundQueryFilter `json:"filter"`
	Sort   *TerminalRefundQuerySort   `json:"sort"`
}
