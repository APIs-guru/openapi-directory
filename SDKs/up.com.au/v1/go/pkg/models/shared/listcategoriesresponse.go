package shared

// ListCategoriesResponse
// Successful response to get all categories and their ancestry. The
// returned list is not paginated.
type ListCategoriesResponse struct {
	Data []CategoryResource `json:"data"`
}
