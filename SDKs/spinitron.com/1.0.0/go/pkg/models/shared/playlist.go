package shared

import (
"time")

type PlaylistLinks struct {
    Persona *Link `json:"persona,omitempty"`
    Self *Link `json:"self,omitempty"`
    Show *Link `json:"show,omitempty"`
    Spins *Link `json:"spins,omitempty"`
    
}

type Playlist struct {
    Links *PlaylistLinks `json:"_links,omitempty"`
    Automation *bool `json:"automation,omitempty"`
    Category *string `json:"category,omitempty"`
    Description *string `json:"description,omitempty"`
    Duration *int64 `json:"duration,omitempty"`
    End *time.Time `json:"end,omitempty"`
    EpisodeDescription *string `json:"episode_description,omitempty"`
    EpisodeName *string `json:"episode_name,omitempty"`
    HideDj *bool `json:"hide_dj,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Image *string `json:"image,omitempty"`
    PersonaID *int64 `json:"persona_id,omitempty"`
    ShowID *int64 `json:"show_id,omitempty"`
    Since *int64 `json:"since,omitempty"`
    Start *time.Time `json:"start,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    Title *string `json:"title,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

