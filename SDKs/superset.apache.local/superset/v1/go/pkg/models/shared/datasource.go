package shared

type DatasourceDatasourceTypeEnum string

const (
	DatasourceDatasourceTypeEnumDruid DatasourceDatasourceTypeEnum = "druid"
	DatasourceDatasourceTypeEnumTable DatasourceDatasourceTypeEnum = "table"
	DatasourceDatasourceTypeEnumView  DatasourceDatasourceTypeEnum = "view"
)

type Datasource struct {
	DatabaseName   *string                      `json:"database_name"`
	DatasourceName *string                      `json:"datasource_name"`
	DatasourceType DatasourceDatasourceTypeEnum `json:"datasource_type"`
	Schema         *string                      `json:"schema"`
}
