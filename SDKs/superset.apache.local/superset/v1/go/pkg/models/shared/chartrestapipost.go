package shared

type ChartRestAPIPostDatasourceTypeEnum string

const (
	ChartRestAPIPostDatasourceTypeEnumDruid ChartRestAPIPostDatasourceTypeEnum = "druid"
	ChartRestAPIPostDatasourceTypeEnumTable ChartRestAPIPostDatasourceTypeEnum = "table"
	ChartRestAPIPostDatasourceTypeEnumView  ChartRestAPIPostDatasourceTypeEnum = "view"
)

type ChartRestAPIPost struct {
	CacheTimeout   *int32                             `json:"cache_timeout"`
	Dashboards     []int32                            `json:"dashboards"`
	DatasourceID   int32                              `json:"datasource_id"`
	DatasourceName *string                            `json:"datasource_name"`
	DatasourceType ChartRestAPIPostDatasourceTypeEnum `json:"datasource_type"`
	Description    *string                            `json:"description"`
	Owners         []int32                            `json:"owners"`
	Params         *string                            `json:"params"`
	QueryContext   *string                            `json:"query_context"`
	SliceName      string                             `json:"slice_name"`
	VizType        *string                            `json:"viz_type"`
}
