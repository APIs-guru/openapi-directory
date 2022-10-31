package shared



type ArtistObject struct {
    ExternalUrls *ExternalURLObject `json:"external_urls,omitempty"`
    Followers *FollowersObject `json:"followers,omitempty"`
    Genres []string `json:"genres,omitempty"`
    Href *string `json:"href,omitempty"`
    ID *string `json:"id,omitempty"`
    Images []ImageObject `json:"images,omitempty"`
    Name *string `json:"name,omitempty"`
    Popularity *int32 `json:"popularity,omitempty"`
    Type *string `json:"type,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

