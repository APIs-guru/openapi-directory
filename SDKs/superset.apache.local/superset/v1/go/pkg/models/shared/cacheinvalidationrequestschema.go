package shared

type CacheInvalidationRequestSchema struct {
	DatasourceUids []string     `json:"datasource_uids"`
	Datasources    []Datasource `json:"datasources"`
}
