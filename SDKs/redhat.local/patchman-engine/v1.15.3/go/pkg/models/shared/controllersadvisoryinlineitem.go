package shared

type ControllersAdvisoryInlineItem struct {
	AdvisoryType      *int64  `json:"advisory_type,omitempty"`
	ApplicableSystems *int64  `json:"applicable_systems,omitempty"`
	CveCount          *int64  `json:"cve_count,omitempty"`
	Description       *string `json:"description,omitempty"`
	ID                *string `json:"id,omitempty"`
	PublicDate        *string `json:"public_date,omitempty"`
	Severity          *int64  `json:"severity,omitempty"`
	Synopsis          *string `json:"synopsis,omitempty"`
}
