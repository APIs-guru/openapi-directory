package shared



type CatalogItemOption struct {
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"display_name,omitempty"`
    Name *string `json:"name,omitempty"`
    ShowColors *bool `json:"show_colors,omitempty"`
    Values []CatalogObject `json:"values,omitempty"`
    
}

