package shared



type DatasetRestAPIPut struct {
    CacheTimeout *int32 `json:"cache_timeout,omitempty"`
    Columns []DatasetColumnsPut `json:"columns,omitempty"`
    DatabaseID *int32 `json:"database_id,omitempty"`
    DefaultEndpoint *string `json:"default_endpoint,omitempty"`
    Description *string `json:"description,omitempty"`
    Extra *string `json:"extra,omitempty"`
    FetchValuesPredicate *string `json:"fetch_values_predicate,omitempty"`
    FilterSelectEnabled *bool `json:"filter_select_enabled,omitempty"`
    IsSqllabView *bool `json:"is_sqllab_view,omitempty"`
    MainDttmCol *string `json:"main_dttm_col,omitempty"`
    Metrics []DatasetMetricsPut `json:"metrics,omitempty"`
    Offset *int32 `json:"offset,omitempty"`
    Owners []int32 `json:"owners,omitempty"`
    Schema *string `json:"schema,omitempty"`
    SQL *string `json:"sql,omitempty"`
    TableName *string `json:"table_name,omitempty"`
    TemplateParams *string `json:"template_params,omitempty"`
    
}

