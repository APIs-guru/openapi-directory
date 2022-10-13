package shared

type ControllersSystemAdvisoriesDbLookup struct {
	AdvisoryType *int64  `json:"advisory_type"`
	CveCount     *int64  `json:"cve_count"`
	Description  *string `json:"description"`
	ID           *string `json:"id"`
	PublicDate   *string `json:"public_date"`
	Severity     *int64  `json:"severity"`
	Synopsis     *string `json:"synopsis"`
}
