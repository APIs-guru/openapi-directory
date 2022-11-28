package shared

// InformationalURL
// Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.
type InformationalURL struct {
	Marketing      *string `json:"marketing,omitempty"`
	Privacy        *string `json:"privacy,omitempty"`
	Support        *string `json:"support,omitempty"`
	TermsOfService *string `json:"termsOfService,omitempty"`
}
