package shared

type InformationalURL struct {
	Marketing      *string `json:"marketing,omitempty"`
	Privacy        *string `json:"privacy,omitempty"`
	Support        *string `json:"support,omitempty"`
	TermsOfService *string `json:"termsOfService,omitempty"`
}
