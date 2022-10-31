package shared

import (
	"time"
)

type ShowLinks struct {
	Personas  []Link `json:"personas,omitempty"`
	Playlists *Link  `json:"playlists,omitempty"`
	Self      *Link  `json:"self,omitempty"`
}

type Show struct {
	Links       *ShowLinks `json:"_links,omitempty"`
	Category    *string    `json:"category,omitempty"`
	Description *string    `json:"description,omitempty"`
	Duration    *int64     `json:"duration,omitempty"`
	End         *time.Time `json:"end,omitempty"`
	HideDj      *bool      `json:"hide_dj,omitempty"`
	ID          *int64     `json:"id,omitempty"`
	Image       *string    `json:"image,omitempty"`
	OneOff      *bool      `json:"one_off,omitempty"`
	Since       *int64     `json:"since,omitempty"`
	Start       *time.Time `json:"start,omitempty"`
	Timezone    *string    `json:"timezone,omitempty"`
	Title       *string    `json:"title,omitempty"`
	URL         *string    `json:"url,omitempty"`
}
