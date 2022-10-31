package shared

type AccountAccess struct {
	Authorized *bool  `json:"authorized,omitempty"`
	UniqueID   string `json:"unique_id"`
}
