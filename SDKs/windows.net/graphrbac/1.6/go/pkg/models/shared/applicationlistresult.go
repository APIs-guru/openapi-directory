package shared

type ApplicationListResult struct {
	OdataNextLink *string                             `json:"odata.nextLink"`
	Value         []map[string]map[string]interface{} `json:"value"`
}
