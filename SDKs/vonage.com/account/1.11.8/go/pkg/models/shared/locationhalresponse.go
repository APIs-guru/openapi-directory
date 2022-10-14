package shared

type LocationHalResponse struct {
	Embedded   *LocationEmbeddedObject `json:"_embedded,omitempty"`
	Links      *Links                  `json:"_links,omitempty"`
	Page       *float64                `json:"page,omitempty"`
	PageSize   *float64                `json:"page_size,omitempty"`
	TotalItems *float64                `json:"total_items,omitempty"`
	TotalPages *float64                `json:"total_pages,omitempty"`
}
