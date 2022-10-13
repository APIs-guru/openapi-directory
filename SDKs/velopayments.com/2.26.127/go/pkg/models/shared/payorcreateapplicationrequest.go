package shared

type PayorCreateApplicationRequest struct {
	Description *string `json:"description"`
	Name        string  `json:"name"`
}
