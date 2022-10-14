package shared

type DatasetRestAPIGet struct {
	CacheTimeout         *int32       `json:"cache_timeout,omitempty"`
	Columns              Meta22       `json:"columns"`
	Database             Meta23       `json:"database"`
	DatasourceType       *interface{} `json:"datasource_type,omitempty"`
	DefaultEndpoint      *string      `json:"default_endpoint,omitempty"`
	Description          *string      `json:"description,omitempty"`
	Extra                *string      `json:"extra,omitempty"`
	FetchValuesPredicate *string      `json:"fetch_values_predicate,omitempty"`
	FilterSelectEnabled  *bool        `json:"filter_select_enabled,omitempty"`
	ID                   *int32       `json:"id,omitempty"`
	IsSqllabView         *bool        `json:"is_sqllab_view,omitempty"`
	MainDttmCol          *string      `json:"main_dttm_col,omitempty"`
	Metrics              Meta25       `json:"metrics"`
	Offset               *int32       `json:"offset,omitempty"`
	Owners               *Meta24      `json:"owners,omitempty"`
	Schema               *string      `json:"schema,omitempty"`
	SQL                  *string      `json:"sql,omitempty"`
	TableName            string       `json:"table_name"`
	TemplateParams       *string      `json:"template_params,omitempty"`
	URL                  *interface{} `json:"url,omitempty"`
}
