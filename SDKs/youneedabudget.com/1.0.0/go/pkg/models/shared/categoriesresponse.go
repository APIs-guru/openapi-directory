package shared

type CategoriesResponseData struct {
	CategoryGroups  []CategoryGroupWithCategories `json:"category_groups"`
	ServerKnowledge int64                         `json:"server_knowledge"`
}

type CategoriesResponse struct {
	Data CategoriesResponseData `json:"data"`
}
