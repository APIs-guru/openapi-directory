package shared

type PrivateUserObject struct {
	Country         *string                        `json:"country"`
	DisplayName     *string                        `json:"display_name"`
	Email           *string                        `json:"email"`
	ExplicitContent *ExplicitContentSettingsObject `json:"explicit_content"`
	ExternalUrls    *ExternalURLObject             `json:"external_urls"`
	Followers       *FollowersObject               `json:"followers"`
	Href            *string                        `json:"href"`
	ID              *string                        `json:"id"`
	Images          []ImageObject                  `json:"images"`
	Product         *string                        `json:"product"`
	Type            *string                        `json:"type"`
	URI             *string                        `json:"uri"`
}
