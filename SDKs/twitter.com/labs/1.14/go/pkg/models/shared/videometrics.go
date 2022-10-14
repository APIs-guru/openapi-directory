package shared

type VideoMetrics struct {
	MediaKey         string `json:"media_key"`
	Playback0Count   *int32 `json:"playback_0_count,omitempty"`
	Playback100Count *int32 `json:"playback_100_count,omitempty"`
	Playback25Count  *int32 `json:"playback_25_count,omitempty"`
	Playback50Count  *int32 `json:"playback_50_count,omitempty"`
	Playback75Count  *int32 `json:"playback_75_count,omitempty"`
	ViewCount        int32  `json:"view_count"`
}
