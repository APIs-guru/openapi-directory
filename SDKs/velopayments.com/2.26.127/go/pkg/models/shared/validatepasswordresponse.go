package shared

type ValidatePasswordResponse struct {
	Score       *int32   `json:"score,omitempty"`
	Suggestions []string `json:"suggestions,omitempty"`
	Valid       *bool    `json:"valid,omitempty"`
	Warning     *string  `json:"warning,omitempty"`
}
