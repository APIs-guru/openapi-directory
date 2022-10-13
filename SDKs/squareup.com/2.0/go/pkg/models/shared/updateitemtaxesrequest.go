package shared

type UpdateItemTaxesRequest struct {
	ItemIds        []string `json:"item_ids"`
	TaxesToDisable []string `json:"taxes_to_disable"`
	TaxesToEnable  []string `json:"taxes_to_enable"`
}
