package shared

type SimplifiedShowObject struct {
	AvailableMarkets   []string           `json:"available_markets,omitempty"`
	Copyrights         []CopyrightObject  `json:"copyrights,omitempty"`
	Description        *string            `json:"description,omitempty"`
	Explicit           *bool              `json:"explicit,omitempty"`
	ExternalUrls       *ExternalURLObject `json:"external_urls,omitempty"`
	Href               *string            `json:"href,omitempty"`
	HTMLDescription    *string            `json:"html_description,omitempty"`
	ID                 *string            `json:"id,omitempty"`
	Images             []ImageObject      `json:"images,omitempty"`
	IsExternallyHosted *bool              `json:"is_externally_hosted,omitempty"`
	Languages          []string           `json:"languages,omitempty"`
	MediaType          *string            `json:"media_type,omitempty"`
	Name               *string            `json:"name,omitempty"`
	Publisher          *string            `json:"publisher,omitempty"`
	Type               *string            `json:"type,omitempty"`
	URI                *string            `json:"uri,omitempty"`
}
