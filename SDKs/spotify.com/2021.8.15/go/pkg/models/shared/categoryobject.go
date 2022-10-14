package shared

type CategoryObject struct {
	Href  *string       `json:"href,omitempty"`
	Icons []ImageObject `json:"icons,omitempty"`
	ID    *string       `json:"id,omitempty"`
	Name  *string       `json:"name,omitempty"`
}
