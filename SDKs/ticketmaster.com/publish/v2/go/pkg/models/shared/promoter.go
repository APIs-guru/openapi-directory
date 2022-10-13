package shared

type Promoter struct {
	Descriptions map[string]string `json:"descriptions"`
	ID           *string           `json:"id"`
	Names        map[string]string `json:"names"`
}
