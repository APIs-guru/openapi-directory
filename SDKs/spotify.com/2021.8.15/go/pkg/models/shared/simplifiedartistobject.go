package shared

type SimplifiedArtistObject struct {
	ExternalUrls *ExternalURLObject `json:"external_urls"`
	Href         *string            `json:"href"`
	ID           *string            `json:"id"`
	Name         *string            `json:"name"`
	Type         *string            `json:"type"`
	URI          *string            `json:"uri"`
}
