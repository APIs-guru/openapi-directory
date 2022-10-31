package shared




type ChartDataDatasourceTypeEnum string

const (
    ChartDataDatasourceTypeEnumDruid ChartDataDatasourceTypeEnum = "druid"
ChartDataDatasourceTypeEnumTable ChartDataDatasourceTypeEnum = "table"
)


type ChartDataDatasource struct {
    ID int32 `json:"id"`
    Type *ChartDataDatasourceTypeEnum `json:"type,omitempty"`
    
}

