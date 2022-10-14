package shared

type PrivateUserObject struct {
	Country         *string                        `json:"country,omitempty"`
	DisplayName     *string                        `json:"display_name,omitempty"`
	Email           *string                        `json:"email,omitempty"`
	ExplicitContent *ExplicitContentSettingsObject `json:"explicit_content,omitempty"`
	ExternalUrls    *ExternalURLObject             `json:"external_urls,omitempty"`
	Followers       *FollowersObject               `json:"followers,omitempty"`
	Href            *string                        `json:"href,omitempty"`
	ID              *string                        `json:"id,omitempty"`
	Images          []ImageObject                  `json:"images,omitempty"`
	Product         *string                        `json:"product,omitempty"`
	Type            *string                        `json:"type,omitempty"`
	URI             *string                        `json:"uri,omitempty"`
}
