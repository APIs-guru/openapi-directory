package shared

type SimplifiedArtistObject struct {
	ExternalUrls *ExternalURLObject `json:"external_urls,omitempty"`
	Href         *string            `json:"href,omitempty"`
	ID           *string            `json:"id,omitempty"`
	Name         *string            `json:"name,omitempty"`
	Type         *string            `json:"type,omitempty"`
	URI          *string            `json:"uri,omitempty"`
}
