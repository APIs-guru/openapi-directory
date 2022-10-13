package shared

type ControllersAdvisoryDetailAttributes struct {
	Cves         []string          `json:"cves"`
	Description  *string           `json:"description"`
	Fixes        *string           `json:"fixes"`
	ModifiedDate *string           `json:"modified_date"`
	Packages     map[string]string `json:"packages"`
	PublicDate   *string           `json:"public_date"`
	References   []string          `json:"references"`
	Severity     *int64            `json:"severity"`
	Solution     *string           `json:"solution"`
	Synopsis     *string           `json:"synopsis"`
	Topic        *string           `json:"topic"`
}
