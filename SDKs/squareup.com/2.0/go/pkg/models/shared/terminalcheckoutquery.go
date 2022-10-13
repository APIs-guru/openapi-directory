package shared

type TerminalCheckoutQuery struct {
	Filter *TerminalCheckoutQueryFilter `json:"filter"`
	Sort   *TerminalCheckoutQuerySort   `json:"sort"`
}
