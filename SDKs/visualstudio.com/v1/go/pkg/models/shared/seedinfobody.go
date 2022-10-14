package shared

type SeedInfoBody struct {
	GitConfig    *GitConfigOptionsBody `json:"gitConfig,omitempty"`
	RecurseClone *bool                 `json:"recurseClone,omitempty"`
	Repository   *RepositoryInfoBody   `json:"repository,omitempty"`
	SeedMoniker  *string               `json:"seedMoniker,omitempty"`
	SeedType     *string               `json:"seedType,omitempty"`
}
