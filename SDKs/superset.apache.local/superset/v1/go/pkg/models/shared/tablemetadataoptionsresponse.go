package shared

type TableMetadataOptionsResponse struct {
	Deferrable *bool `json:"deferrable,omitempty"`
	Initially  *bool `json:"initially,omitempty"`
	Match      *bool `json:"match,omitempty"`
	Ondelete   *bool `json:"ondelete,omitempty"`
	Onupdate   *bool `json:"onupdate,omitempty"`
}
