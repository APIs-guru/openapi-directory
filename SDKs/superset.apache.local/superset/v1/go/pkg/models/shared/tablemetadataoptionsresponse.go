package shared

type TableMetadataOptionsResponse struct {
	Deferrable *bool `json:"deferrable"`
	Initially  *bool `json:"initially"`
	Match      *bool `json:"match"`
	Ondelete   *bool `json:"ondelete"`
	Onupdate   *bool `json:"onupdate"`
}
