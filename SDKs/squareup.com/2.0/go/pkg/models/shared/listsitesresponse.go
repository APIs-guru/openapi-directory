package shared

type ListSitesResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Sites  []Site  `json:"sites,omitempty"`
}
