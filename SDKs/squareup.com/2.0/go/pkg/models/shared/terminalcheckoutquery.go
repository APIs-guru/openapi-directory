package shared

type TerminalCheckoutQuery struct {
	Filter *TerminalCheckoutQueryFilter `json:"filter,omitempty"`
	Sort   *TerminalCheckoutQuerySort   `json:"sort,omitempty"`
}
