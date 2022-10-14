package shared

type OnDemandVideoBuy struct {
	Active    bool                   `json:"active"`
	Price     map[string]interface{} `json:"price"`
	Purchased *bool                  `json:"purchased,omitempty"`
}

type OnDemandVideoInteractionsPage struct {
	Added   bool     `json:"added"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandVideoInteractions struct {
	Page OnDemandVideoInteractionsPage `json:"page"`
}

type OnDemandVideoMetadataConnectionsSeason struct {
	Name    string   `json:"name"`
	Options []string `json:"options"`
	URI     string   `json:"uri"`
}

type OnDemandVideoMetadataConnections struct {
	Season OnDemandVideoMetadataConnectionsSeason `json:"season"`
}

type OnDemandVideoMetadataInteractionsLikes struct {
	Added     bool   `json:"added"`
	AddedTime string `json:"added_time"`
	URI       string `json:"uri"`
}

type OnDemandVideoMetadataInteractionsWatchlater struct {
	Added     bool   `json:"added"`
	AddedTime string `json:"added_time"`
	URI       string `json:"uri"`
}

type OnDemandVideoMetadataInteractions struct {
	Likes      OnDemandVideoMetadataInteractionsLikes      `json:"likes"`
	Watchlater OnDemandVideoMetadataInteractionsWatchlater `json:"watchlater"`
}

type OnDemandVideoMetadata struct {
	Connections  OnDemandVideoMetadataConnections  `json:"connections"`
	Interactions OnDemandVideoMetadataInteractions `json:"interactions"`
}

type OnDemandVideoRent struct {
	Active    bool                   `json:"active"`
	Price     map[string]interface{} `json:"price"`
	Purchased *bool                  `json:"purchased,omitempty"`
}

type OnDemandVideoTypeEnum string

const (
	OnDemandVideoTypeEnumExtra   OnDemandVideoTypeEnum = "extra"
	OnDemandVideoTypeEnumMain    OnDemandVideoTypeEnum = "main"
	OnDemandVideoTypeEnumTrailer OnDemandVideoTypeEnum = "trailer"
)

type OnDemandVideo struct {
	Buy          OnDemandVideoBuy          `json:"buy"`
	Description  *string                   `json:"description,omitempty"`
	Duration     *string                   `json:"duration,omitempty"`
	Episode      *float64                  `json:"episode,omitempty"`
	Interactions OnDemandVideoInteractions `json:"interactions"`
	Link         string                    `json:"link"`
	Metadata     OnDemandVideoMetadata     `json:"metadata"`
	Name         *string                   `json:"name,omitempty"`
	Options      []string                  `json:"options,omitempty"`
	Pictures     *Picture                  `json:"pictures,omitempty"`
	PlayProgress float64                   `json:"play_progress"`
	Position     *float64                  `json:"position,omitempty"`
	ReleaseDate  *string                   `json:"release_date,omitempty"`
	ReleaseYear  float64                   `json:"release_year"`
	Rent         OnDemandVideoRent         `json:"rent"`
	Type         OnDemandVideoTypeEnum     `json:"type"`
	URI          string                    `json:"uri"`
	User         *User                     `json:"user,omitempty"`
}
