package shared

type AccountAccess struct {
	Authorized *bool  `json:"authorized"`
	UniqueID   string `json:"unique_id"`
}
