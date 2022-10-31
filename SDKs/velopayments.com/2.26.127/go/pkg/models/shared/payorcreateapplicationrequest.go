package shared

type PayorCreateApplicationRequest struct {
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`
}
