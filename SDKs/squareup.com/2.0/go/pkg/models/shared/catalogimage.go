package shared

type CatalogImage struct {
	Caption *string `json:"caption,omitempty"`
	Name    *string `json:"name,omitempty"`
	URL     *string `json:"url,omitempty"`
}
