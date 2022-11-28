package shared

// GetCategoryResponse
// Successful response to get a single category and its ancestry.
type GetCategoryResponse struct {
	Data CategoryResource `json:"data"`
}
