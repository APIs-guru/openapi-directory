package shared

type ShowObjectEpisodes struct {
	Href     *string                   `json:"href"`
	Items    []SimplifiedEpisodeObject `json:"items"`
	Limit    *int32                    `json:"limit"`
	Next     *string                   `json:"next"`
	Offset   *int32                    `json:"offset"`
	Previous *string                   `json:"previous"`
	Total    *int32                    `json:"total"`
}

type ShowObject struct {
	AvailableMarkets   []string            `json:"available_markets"`
	Copyrights         []CopyrightObject   `json:"copyrights"`
	Description        *string             `json:"description"`
	Episodes           *ShowObjectEpisodes `json:"episodes"`
	Explicit           *bool               `json:"explicit"`
	ExternalUrls       *ExternalURLObject  `json:"external_urls"`
	Href               *string             `json:"href"`
	HTMLDescription    *string             `json:"html_description"`
	ID                 *string             `json:"id"`
	Images             []ImageObject       `json:"images"`
	IsExternallyHosted *bool               `json:"is_externally_hosted"`
	Languages          []string            `json:"languages"`
	MediaType          *string             `json:"media_type"`
	Name               *string             `json:"name"`
	Publisher          *string             `json:"publisher"`
	Type               *string             `json:"type"`
	URI                *string             `json:"uri"`
}
