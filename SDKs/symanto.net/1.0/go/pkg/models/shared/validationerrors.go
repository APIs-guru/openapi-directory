package shared

type ValidationErrors struct {
	Detail []ValidationError `json:"detail,omitempty"`
}
