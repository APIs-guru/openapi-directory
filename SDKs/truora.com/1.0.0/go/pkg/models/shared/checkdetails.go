package shared

type CheckDetails struct {
	CheckID      string      `json:"check_id"`
	DataSet      string      `json:"data_set"`
	DatabaseName string      `json:"database_name"`
	Group        interface{} `json:"group"`
	ID           string      `json:"id"`
	Result       interface{} `json:"result"`
	Score        float64     `json:"score"`
	Tables       []Table     `json:"tables"`
}
