package shared

type ValidatePasswordResponse struct {
	Score       *int32   `json:"score"`
	Suggestions []string `json:"suggestions"`
	Valid       *bool    `json:"valid"`
	Warning     *string  `json:"warning"`
}
