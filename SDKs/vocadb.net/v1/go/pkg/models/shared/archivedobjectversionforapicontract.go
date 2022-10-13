package shared

type ArchivedObjectVersionForAPIContract struct {
	ChangedFields []string `json:"changedFields"`
	ID            *int32   `json:"id"`
	Notes         *string  `json:"notes"`
	Version       *int32   `json:"version"`
}
