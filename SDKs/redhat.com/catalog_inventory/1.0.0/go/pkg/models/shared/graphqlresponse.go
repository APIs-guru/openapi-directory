package shared

type GraphQlResponse struct {
	Data   map[string]interface{}   `json:"data"`
	Errors []map[string]interface{} `json:"errors"`
}
