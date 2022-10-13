package shared

type RecommendedRuleActionEnum string

const (
	RecommendedRuleActionEnumAllow RecommendedRuleActionEnum = "ALLOW"
	RecommendedRuleActionEnumDrop  RecommendedRuleActionEnum = "DROP"
)

type RecommendedRule struct {
	Action       *RecommendedRuleActionEnum `json:"action"`
	Destinations []Reference                `json:"destinations"`
	PortRanges   []SimplePortRange          `json:"port_ranges"`
	Protocols    []string                   `json:"protocols"`
	Sources      []Reference                `json:"sources"`
}
