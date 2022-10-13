package shared

type PublicUserObject struct {
	DisplayName  *string            `json:"display_name"`
	ExternalUrls *ExternalURLObject `json:"external_urls"`
	Followers    *FollowersObject   `json:"followers"`
	Href         *string            `json:"href"`
	ID           *string            `json:"id"`
	Images       []ImageObject      `json:"images"`
	Type         *string            `json:"type"`
	URI          *string            `json:"uri"`
}
