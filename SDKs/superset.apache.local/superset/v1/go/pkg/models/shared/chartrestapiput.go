package shared

type ChartRestAPIPutDatasourceTypeEnum string

const (
	ChartRestAPIPutDatasourceTypeEnumDruid ChartRestAPIPutDatasourceTypeEnum = "druid"
	ChartRestAPIPutDatasourceTypeEnumTable ChartRestAPIPutDatasourceTypeEnum = "table"
	ChartRestAPIPutDatasourceTypeEnumView  ChartRestAPIPutDatasourceTypeEnum = "view"
)

type ChartRestAPIPut struct {
	CacheTimeout   *int32                             `json:"cache_timeout"`
	Dashboards     []int32                            `json:"dashboards"`
	DatasourceID   *int32                             `json:"datasource_id"`
	DatasourceType *ChartRestAPIPutDatasourceTypeEnum `json:"datasource_type"`
	Description    *string                            `json:"description"`
	Owners         []int32                            `json:"owners"`
	Params         *string                            `json:"params"`
	QueryContext   *string                            `json:"query_context"`
	SliceName      *string                            `json:"slice_name"`
	VizType        *string                            `json:"viz_type"`
}
