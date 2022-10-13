package shared

type ArtistObject struct {
	ExternalUrls *ExternalURLObject `json:"external_urls"`
	Followers    *FollowersObject   `json:"followers"`
	Genres       []string           `json:"genres"`
	Href         *string            `json:"href"`
	ID           *string            `json:"id"`
	Images       []ImageObject      `json:"images"`
	Name         *string            `json:"name"`
	Popularity   *int32             `json:"popularity"`
	Type         *string            `json:"type"`
	URI          *string            `json:"uri"`
}
