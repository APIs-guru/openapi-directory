package shared

type InformationalURL struct {
	Marketing      *string `json:"marketing"`
	Privacy        *string `json:"privacy"`
	Support        *string `json:"support"`
	TermsOfService *string `json:"termsOfService"`
}
