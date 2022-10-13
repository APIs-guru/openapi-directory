package shared

type VideoMetrics struct {
	MediaKey         string `json:"media_key"`
	Playback0Count   *int32 `json:"playback_0_count"`
	Playback100Count *int32 `json:"playback_100_count"`
	Playback25Count  *int32 `json:"playback_25_count"`
	Playback50Count  *int32 `json:"playback_50_count"`
	Playback75Count  *int32 `json:"playback_75_count"`
	ViewCount        int32  `json:"view_count"`
}
