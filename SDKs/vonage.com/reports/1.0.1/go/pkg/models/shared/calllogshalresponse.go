package shared



type CallLogsHalResponse struct {
    Embedded *CallLogsEmbeddedObject `json:"_embedded,omitempty"`
    Links *Links `json:"_links,omitempty"`
    Page *float64 `json:"page,omitempty"`
    PageSize *float64 `json:"page_size,omitempty"`
    TotalItems *float64 `json:"total_items,omitempty"`
    TotalPage *float64 `json:"total_page,omitempty"`
    
}

