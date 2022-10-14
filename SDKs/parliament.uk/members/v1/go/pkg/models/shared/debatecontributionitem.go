package shared

type DebateContributionItem struct {
	Links []Link              `json:"links,omitempty"`
	Value *DebateContribution `json:"value,omitempty"`
}
