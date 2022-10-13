package shared

type DatasetRestAPIGet struct {
	CacheTimeout         *int32       `json:"cache_timeout"`
	Columns              Meta22       `json:"columns"`
	Database             Meta23       `json:"database"`
	DatasourceType       *interface{} `json:"datasource_type"`
	DefaultEndpoint      *string      `json:"default_endpoint"`
	Description          *string      `json:"description"`
	Extra                *string      `json:"extra"`
	FetchValuesPredicate *string      `json:"fetch_values_predicate"`
	FilterSelectEnabled  *bool        `json:"filter_select_enabled"`
	ID                   *int32       `json:"id"`
	IsSqllabView         *bool        `json:"is_sqllab_view"`
	MainDttmCol          *string      `json:"main_dttm_col"`
	Metrics              Meta25       `json:"metrics"`
	Offset               *int32       `json:"offset"`
	Owners               *Meta24      `json:"owners"`
	Schema               *string      `json:"schema"`
	SQL                  *string      `json:"sql"`
	TableName            string       `json:"table_name"`
	TemplateParams       *string      `json:"template_params"`
	URL                  *interface{} `json:"url"`
}
