package shared

type DashboardDatasetSchema struct {
	CacheTimeout         *int32                   `json:"cache_timeout"`
	ColumnFormats        map[string]interface{}   `json:"column_formats"`
	ColumnTypes          []int32                  `json:"column_types"`
	Columns              []map[string]interface{} `json:"columns"`
	Database             *Database                `json:"database"`
	DatasourceName       *string                  `json:"datasource_name"`
	DefaultEndpoint      *string                  `json:"default_endpoint"`
	EditURL              *string                  `json:"edit_url"`
	FetchValuesPredicate *string                  `json:"fetch_values_predicate"`
	FilterSelect         *bool                    `json:"filter_select"`
	FilterSelectEnabled  *bool                    `json:"filter_select_enabled"`
	GranularitySqla      [][]string               `json:"granularity_sqla"`
	HealthCheckMessage   *string                  `json:"health_check_message"`
	ID                   *int32                   `json:"id"`
	IsSqllabView         *bool                    `json:"is_sqllab_view"`
	MainDttmCol          *string                  `json:"main_dttm_col"`
	Metrics              []map[string]interface{} `json:"metrics"`
	Name                 *string                  `json:"name"`
	Offset               *int32                   `json:"offset"`
	OrderByChoices       [][]string               `json:"order_by_choices"`
	Owners               []int32                  `json:"owners"`
	Params               *string                  `json:"params"`
	Perm                 *string                  `json:"perm"`
	Schema               *string                  `json:"schema"`
	SelectStar           *string                  `json:"select_star"`
	SQL                  *string                  `json:"sql"`
	TableName            *string                  `json:"table_name"`
	TemplateParams       *string                  `json:"template_params"`
	TimeGrainSqla        [][]string               `json:"time_grain_sqla"`
	Type                 *string                  `json:"type"`
	UID                  *string                  `json:"uid"`
	VerboseMap           map[string]string        `json:"verbose_map"`
}
