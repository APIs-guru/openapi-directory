package shared



type PageForResponse struct {
    NumberOfElements *int32 `json:"numberOfElements,omitempty"`
    Page *int32 `json:"page,omitempty"`
    PageSize *int32 `json:"pageSize,omitempty"`
    TotalElements *int64 `json:"totalElements,omitempty"`
    TotalPages *int32 `json:"totalPages,omitempty"`
    
}

