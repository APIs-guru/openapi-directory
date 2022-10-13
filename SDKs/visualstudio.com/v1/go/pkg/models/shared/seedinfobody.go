package shared

type SeedInfoBody struct {
	GitConfig    *GitConfigOptionsBody `json:"gitConfig"`
	RecurseClone *bool                 `json:"recurseClone"`
	Repository   *RepositoryInfoBody   `json:"repository"`
	SeedMoniker  *string               `json:"seedMoniker"`
	SeedType     *string               `json:"seedType"`
}
