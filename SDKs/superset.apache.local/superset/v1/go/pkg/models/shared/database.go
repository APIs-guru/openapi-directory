package shared

type Database struct {
	AllowMultiSchemaMetadataFetch *bool   `json:"allow_multi_schema_metadata_fetch"`
	AllowsCostEstimate            *bool   `json:"allows_cost_estimate"`
	AllowsSubquery                *bool   `json:"allows_subquery"`
	AllowsVirtualTableExplore     *bool   `json:"allows_virtual_table_explore"`
	Backend                       *string `json:"backend"`
	ExploreDatabaseID             *int32  `json:"explore_database_id"`
	ID                            *int32  `json:"id"`
	Name                          *string `json:"name"`
}
