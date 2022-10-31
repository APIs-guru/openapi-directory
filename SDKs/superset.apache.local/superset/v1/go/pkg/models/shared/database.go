package shared



type Database struct {
    AllowMultiSchemaMetadataFetch *bool `json:"allow_multi_schema_metadata_fetch,omitempty"`
    AllowsCostEstimate *bool `json:"allows_cost_estimate,omitempty"`
    AllowsSubquery *bool `json:"allows_subquery,omitempty"`
    AllowsVirtualTableExplore *bool `json:"allows_virtual_table_explore,omitempty"`
    Backend *string `json:"backend,omitempty"`
    ExploreDatabaseID *int32 `json:"explore_database_id,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

