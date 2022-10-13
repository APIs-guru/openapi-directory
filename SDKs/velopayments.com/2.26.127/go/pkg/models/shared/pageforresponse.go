package shared

type PageForResponse struct {
	NumberOfElements *int32 `json:"numberOfElements"`
	Page             *int32 `json:"page"`
	PageSize         *int32 `json:"pageSize"`
	TotalElements    *int64 `json:"totalElements"`
	TotalPages       *int32 `json:"totalPages"`
}
