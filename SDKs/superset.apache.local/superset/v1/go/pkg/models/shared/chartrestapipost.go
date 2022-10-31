package shared

type ChartRestAPIPostDatasourceTypeEnum string

const (
	ChartRestAPIPostDatasourceTypeEnumDruid ChartRestAPIPostDatasourceTypeEnum = "druid"
	ChartRestAPIPostDatasourceTypeEnumTable ChartRestAPIPostDatasourceTypeEnum = "table"
	ChartRestAPIPostDatasourceTypeEnumView  ChartRestAPIPostDatasourceTypeEnum = "view"
)

type ChartRestAPIPost struct {
	CacheTimeout   *int32                             `json:"cache_timeout,omitempty"`
	Dashboards     []int32                            `json:"dashboards,omitempty"`
	DatasourceID   int32                              `json:"datasource_id"`
	DatasourceName *string                            `json:"datasource_name,omitempty"`
	DatasourceType ChartRestAPIPostDatasourceTypeEnum `json:"datasource_type"`
	Description    *string                            `json:"description,omitempty"`
	Owners         []int32                            `json:"owners,omitempty"`
	Params         *string                            `json:"params,omitempty"`
	QueryContext   *string                            `json:"query_context,omitempty"`
	SliceName      string                             `json:"slice_name"`
	VizType        *string                            `json:"viz_type,omitempty"`
}
