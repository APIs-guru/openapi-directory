package shared

import (
	"time"
)

type ShowLinks struct {
	Personas  []Link `json:"personas"`
	Playlists *Link  `json:"playlists"`
	Self      *Link  `json:"self"`
}

type Show struct {
	Links       *ShowLinks `json:"_links"`
	Category    *string    `json:"category"`
	Description *string    `json:"description"`
	Duration    *int64     `json:"duration"`
	End         *time.Time `json:"end"`
	HideDj      *bool      `json:"hide_dj"`
	ID          *int64     `json:"id"`
	Image       *string    `json:"image"`
	OneOff      *bool      `json:"one_off"`
	Since       *int64     `json:"since"`
	Start       *time.Time `json:"start"`
	Timezone    *string    `json:"timezone"`
	Title       *string    `json:"title"`
	URL         *string    `json:"url"`
}
