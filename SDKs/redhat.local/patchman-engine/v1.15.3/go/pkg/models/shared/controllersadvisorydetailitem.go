package shared

type ControllersAdvisoryDetailItem struct {
	Attributes *ControllersAdvisoryDetailAttributes `json:"attributes,omitempty"`
	ID         *string                              `json:"id,omitempty"`
	Type       *string                              `json:"type,omitempty"`
}
