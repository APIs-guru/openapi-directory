package shared

type UpdateItemModifierListsResponse struct {
	Errors    []Error `json:"errors,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}
