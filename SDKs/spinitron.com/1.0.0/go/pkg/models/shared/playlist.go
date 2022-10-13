package shared

import (
	"time"
)

type PlaylistLinks struct {
	Persona *Link `json:"persona"`
	Self    *Link `json:"self"`
	Show    *Link `json:"show"`
	Spins   *Link `json:"spins"`
}

type Playlist struct {
	Links              *PlaylistLinks `json:"_links"`
	Automation         *bool          `json:"automation"`
	Category           *string        `json:"category"`
	Description        *string        `json:"description"`
	Duration           *int64         `json:"duration"`
	End                *time.Time     `json:"end"`
	EpisodeDescription *string        `json:"episode_description"`
	EpisodeName        *string        `json:"episode_name"`
	HideDj             *bool          `json:"hide_dj"`
	ID                 *int64         `json:"id"`
	Image              *string        `json:"image"`
	PersonaID          *int64         `json:"persona_id"`
	ShowID             *int64         `json:"show_id"`
	Since              *int64         `json:"since"`
	Start              *time.Time     `json:"start"`
	Timezone           *string        `json:"timezone"`
	Title              *string        `json:"title"`
	URL                *string        `json:"url"`
}
