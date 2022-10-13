package shared

type ChartDataQueryContextSchema struct {
	Datasource   *ChartDataDatasource   `json:"datasource"`
	Force        *bool                  `json:"force"`
	Queries      []ChartDataQueryObject `json:"queries"`
	ResultFormat *interface{}           `json:"result_format"`
	ResultType   *interface{}           `json:"result_type"`
}
