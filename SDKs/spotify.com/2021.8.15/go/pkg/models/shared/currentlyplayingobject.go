package shared



type CurrentlyPlayingObject struct {
    Context *ContextObject `json:"context,omitempty"`
    CurrentlyPlayingType *string `json:"currently_playing_type,omitempty"`
    IsPlaying *bool `json:"is_playing,omitempty"`
    Item *interface{} `json:"item,omitempty"`
    ProgressMs *int32 `json:"progress_ms,omitempty"`
    Timestamp *int32 `json:"timestamp,omitempty"`
    
}

