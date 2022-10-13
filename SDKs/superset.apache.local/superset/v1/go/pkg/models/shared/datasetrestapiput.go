package shared

type DatasetRestAPIPut struct {
	CacheTimeout         *int32              `json:"cache_timeout"`
	Columns              []DatasetColumnsPut `json:"columns"`
	DatabaseID           *int32              `json:"database_id"`
	DefaultEndpoint      *string             `json:"default_endpoint"`
	Description          *string             `json:"description"`
	Extra                *string             `json:"extra"`
	FetchValuesPredicate *string             `json:"fetch_values_predicate"`
	FilterSelectEnabled  *bool               `json:"filter_select_enabled"`
	IsSqllabView         *bool               `json:"is_sqllab_view"`
	MainDttmCol          *string             `json:"main_dttm_col"`
	Metrics              []DatasetMetricsPut `json:"metrics"`
	Offset               *int32              `json:"offset"`
	Owners               []int32             `json:"owners"`
	Schema               *string             `json:"schema"`
	SQL                  *string             `json:"sql"`
	TableName            *string             `json:"table_name"`
	TemplateParams       *string             `json:"template_params"`
}
