package shared

type LocationHalResponse struct {
	Embedded   *LocationEmbeddedObject `json:"_embedded"`
	Links      *Links                  `json:"_links"`
	Page       *float64                `json:"page"`
	PageSize   *float64                `json:"page_size"`
	TotalItems *float64                `json:"total_items"`
	TotalPages *float64                `json:"total_pages"`
}
