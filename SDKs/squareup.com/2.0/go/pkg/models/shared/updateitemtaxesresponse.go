package shared

type UpdateItemTaxesResponse struct {
	Errors    []Error `json:"errors"`
	UpdatedAt *string `json:"updated_at"`
}
