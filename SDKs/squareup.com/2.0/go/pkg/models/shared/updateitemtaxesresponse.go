package shared

type UpdateItemTaxesResponse struct {
	Errors    []Error `json:"errors,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}
