package shared

type ArchivedObjectVersionForAPIContract struct {
	ChangedFields []string `json:"changedFields,omitempty"`
	ID            *int32   `json:"id,omitempty"`
	Notes         *string  `json:"notes,omitempty"`
	Version       *int32   `json:"version,omitempty"`
}
