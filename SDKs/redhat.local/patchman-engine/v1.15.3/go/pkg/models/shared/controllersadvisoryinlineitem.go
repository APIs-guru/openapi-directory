package shared

type ControllersAdvisoryInlineItem struct {
	AdvisoryType      *int64  `json:"advisory_type"`
	ApplicableSystems *int64  `json:"applicable_systems"`
	CveCount          *int64  `json:"cve_count"`
	Description       *string `json:"description"`
	ID                *string `json:"id"`
	PublicDate        *string `json:"public_date"`
	Severity          *int64  `json:"severity"`
	Synopsis          *string `json:"synopsis"`
}
