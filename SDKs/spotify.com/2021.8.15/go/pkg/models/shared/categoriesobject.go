package shared

type CategoriesObjectCategories struct {
	Href     *string          `json:"href"`
	Items    []CategoryObject `json:"items"`
	Limit    *int32           `json:"limit"`
	Next     *string          `json:"next"`
	Offset   *int32           `json:"offset"`
	Previous *string          `json:"previous"`
	Total    *int32           `json:"total"`
}

type CategoriesObject struct {
	Categories *CategoriesObjectCategories `json:"categories"`
}
