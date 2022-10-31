package shared




type ChartRestAPIPutDatasourceTypeEnum string

const (
    ChartRestAPIPutDatasourceTypeEnumDruid ChartRestAPIPutDatasourceTypeEnum = "druid"
ChartRestAPIPutDatasourceTypeEnumTable ChartRestAPIPutDatasourceTypeEnum = "table"
ChartRestAPIPutDatasourceTypeEnumView ChartRestAPIPutDatasourceTypeEnum = "view"
)


type ChartRestAPIPut struct {
    CacheTimeout *int32 `json:"cache_timeout,omitempty"`
    Dashboards []int32 `json:"dashboards,omitempty"`
    DatasourceID *int32 `json:"datasource_id,omitempty"`
    DatasourceType *ChartRestAPIPutDatasourceTypeEnum `json:"datasource_type,omitempty"`
    Description *string `json:"description,omitempty"`
    Owners []int32 `json:"owners,omitempty"`
    Params *string `json:"params,omitempty"`
    QueryContext *string `json:"query_context,omitempty"`
    SliceName *string `json:"slice_name,omitempty"`
    VizType *string `json:"viz_type,omitempty"`
    
}

