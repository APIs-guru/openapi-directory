package shared

type Sku struct {
	Name *string `json:"name,omitempty"`
	Tier *string `json:"tier,omitempty"`
}
