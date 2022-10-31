package shared



type ChartDataQueryContextSchema struct {
    Datasource *ChartDataDatasource `json:"datasource,omitempty"`
    Force *bool `json:"force,omitempty"`
    Queries []ChartDataQueryObject `json:"queries,omitempty"`
    ResultFormat *interface{} `json:"result_format,omitempty"`
    ResultType *interface{} `json:"result_type,omitempty"`
    
}

