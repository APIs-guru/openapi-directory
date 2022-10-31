package shared

type SourceApplication struct {
	ApplicationID *string `json:"application_id,omitempty"`
	Name          *string `json:"name,omitempty"`
	Product       *string `json:"product,omitempty"`
}
