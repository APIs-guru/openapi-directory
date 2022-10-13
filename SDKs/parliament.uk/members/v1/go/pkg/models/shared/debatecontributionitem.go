package shared

type DebateContributionItem struct {
	Links []Link              `json:"links"`
	Value *DebateContribution `json:"value"`
}
