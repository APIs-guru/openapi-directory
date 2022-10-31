package shared



type CacheInvalidationRequestSchema struct {
    DatasourceUids []string `json:"datasource_uids,omitempty"`
    Datasources []Datasource `json:"datasources,omitempty"`
    
}

