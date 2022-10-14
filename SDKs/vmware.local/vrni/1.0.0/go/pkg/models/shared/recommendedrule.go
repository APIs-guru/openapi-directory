package shared

type RecommendedRuleActionEnum string

const (
	RecommendedRuleActionEnumAllow RecommendedRuleActionEnum = "ALLOW"
	RecommendedRuleActionEnumDrop  RecommendedRuleActionEnum = "DROP"
)

type RecommendedRule struct {
	Action       *RecommendedRuleActionEnum `json:"action,omitempty"`
	Destinations []Reference                `json:"destinations,omitempty"`
	PortRanges   []SimplePortRange          `json:"port_ranges,omitempty"`
	Protocols    []string                   `json:"protocols,omitempty"`
	Sources      []Reference                `json:"sources,omitempty"`
}
