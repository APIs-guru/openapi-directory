package shared

type ControllersAdvisoryDetailAttributes struct {
	Cves         []string          `json:"cves,omitempty"`
	Description  *string           `json:"description,omitempty"`
	Fixes        *string           `json:"fixes,omitempty"`
	ModifiedDate *string           `json:"modified_date,omitempty"`
	Packages     map[string]string `json:"packages,omitempty"`
	PublicDate   *string           `json:"public_date,omitempty"`
	References   []string          `json:"references,omitempty"`
	Severity     *int64            `json:"severity,omitempty"`
	Solution     *string           `json:"solution,omitempty"`
	Synopsis     *string           `json:"synopsis,omitempty"`
	Topic        *string           `json:"topic,omitempty"`
}
