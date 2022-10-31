package shared



type CategoriesObjectCategories struct {
    Href *string `json:"href,omitempty"`
    Items []CategoryObject `json:"items,omitempty"`
    Limit *int32 `json:"limit,omitempty"`
    Next *string `json:"next,omitempty"`
    Offset *int32 `json:"offset,omitempty"`
    Previous *string `json:"previous,omitempty"`
    Total *int32 `json:"total,omitempty"`
    
}

type CategoriesObject struct {
    Categories *CategoriesObjectCategories `json:"categories,omitempty"`
    
}

