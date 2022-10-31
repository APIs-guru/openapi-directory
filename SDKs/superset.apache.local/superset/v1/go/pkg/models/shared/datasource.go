package shared




type DatasourceDatasourceTypeEnum string

const (
    DatasourceDatasourceTypeEnumDruid DatasourceDatasourceTypeEnum = "druid"
DatasourceDatasourceTypeEnumTable DatasourceDatasourceTypeEnum = "table"
DatasourceDatasourceTypeEnumView DatasourceDatasourceTypeEnum = "view"
)


type Datasource struct {
    DatabaseName *string `json:"database_name,omitempty"`
    DatasourceName *string `json:"datasource_name,omitempty"`
    DatasourceType DatasourceDatasourceTypeEnum `json:"datasource_type"`
    Schema *string `json:"schema,omitempty"`
    
}

