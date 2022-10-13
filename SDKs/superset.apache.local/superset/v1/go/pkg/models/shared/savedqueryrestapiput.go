package shared

type SavedQueryRestAPIPut struct {
	DbID        *int32  `json:"db_id"`
	Description *string `json:"description"`
	Label       *string `json:"label"`
	Schema      *string `json:"schema"`
	SQL         *string `json:"sql"`
}
