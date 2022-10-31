package shared

type PublicUserObject struct {
	DisplayName  *string            `json:"display_name,omitempty"`
	ExternalUrls *ExternalURLObject `json:"external_urls,omitempty"`
	Followers    *FollowersObject   `json:"followers,omitempty"`
	Href         *string            `json:"href,omitempty"`
	ID           *string            `json:"id,omitempty"`
	Images       []ImageObject      `json:"images,omitempty"`
	Type         *string            `json:"type,omitempty"`
	URI          *string            `json:"uri,omitempty"`
}
