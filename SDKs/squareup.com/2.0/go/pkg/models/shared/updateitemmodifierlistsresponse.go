package shared

type UpdateItemModifierListsResponse struct {
	Errors    []Error `json:"errors"`
	UpdatedAt *string `json:"updated_at"`
}
