package shared

type ListSitesResponse struct {
	Errors []Error `json:"errors"`
	Sites  []Site  `json:"sites"`
}
