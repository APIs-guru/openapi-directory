package shared

type DashboardDatasetSchema struct {
	CacheTimeout         *int32                   `json:"cache_timeout,omitempty"`
	ColumnFormats        map[string]interface{}   `json:"column_formats,omitempty"`
	ColumnTypes          []int32                  `json:"column_types,omitempty"`
	Columns              []map[string]interface{} `json:"columns,omitempty"`
	Database             *Database                `json:"database,omitempty"`
	DatasourceName       *string                  `json:"datasource_name,omitempty"`
	DefaultEndpoint      *string                  `json:"default_endpoint,omitempty"`
	EditURL              *string                  `json:"edit_url,omitempty"`
	FetchValuesPredicate *string                  `json:"fetch_values_predicate,omitempty"`
	FilterSelect         *bool                    `json:"filter_select,omitempty"`
	FilterSelectEnabled  *bool                    `json:"filter_select_enabled,omitempty"`
	GranularitySqla      [][]string               `json:"granularity_sqla,omitempty"`
	HealthCheckMessage   *string                  `json:"health_check_message,omitempty"`
	ID                   *int32                   `json:"id,omitempty"`
	IsSqllabView         *bool                    `json:"is_sqllab_view,omitempty"`
	MainDttmCol          *string                  `json:"main_dttm_col,omitempty"`
	Metrics              []map[string]interface{} `json:"metrics,omitempty"`
	Name                 *string                  `json:"name,omitempty"`
	Offset               *int32                   `json:"offset,omitempty"`
	OrderByChoices       [][]string               `json:"order_by_choices,omitempty"`
	Owners               []int32                  `json:"owners,omitempty"`
	Params               *string                  `json:"params,omitempty"`
	Perm                 *string                  `json:"perm,omitempty"`
	Schema               *string                  `json:"schema,omitempty"`
	SelectStar           *string                  `json:"select_star,omitempty"`
	SQL                  *string                  `json:"sql,omitempty"`
	TableName            *string                  `json:"table_name,omitempty"`
	TemplateParams       *string                  `json:"template_params,omitempty"`
	TimeGrainSqla        [][]string               `json:"time_grain_sqla,omitempty"`
	Type                 *string                  `json:"type,omitempty"`
	UID                  *string                  `json:"uid,omitempty"`
	VerboseMap           map[string]string        `json:"verbose_map,omitempty"`
}
