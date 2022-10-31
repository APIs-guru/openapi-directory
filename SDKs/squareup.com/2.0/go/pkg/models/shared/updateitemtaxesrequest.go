package shared



type UpdateItemTaxesRequest struct {
    ItemIds []string `json:"item_ids"`
    TaxesToDisable []string `json:"taxes_to_disable,omitempty"`
    TaxesToEnable []string `json:"taxes_to_enable,omitempty"`
    
}

