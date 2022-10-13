package shared

type VideoNonPublicMetrics struct {
	Playback0Count   *int32 `json:"playback_0_count"`
	Playback100Count *int32 `json:"playback_100_count"`
	Playback25Count  *int32 `json:"playback_25_count"`
	Playback50Count  *int32 `json:"playback_50_count"`
	Playback75Count  *int32 `json:"playback_75_count"`
}

type VideoOrganicMetrics struct {
	Playback0Count   *int32 `json:"playback_0_count"`
	Playback100Count *int32 `json:"playback_100_count"`
	Playback25Count  *int32 `json:"playback_25_count"`
	Playback50Count  *int32 `json:"playback_50_count"`
	Playback75Count  *int32 `json:"playback_75_count"`
	ViewCount        *int32 `json:"view_count"`
}

type VideoPromotedMetrics struct {
	Playback0Count   *int32 `json:"playback_0_count"`
	Playback100Count *int32 `json:"playback_100_count"`
	Playback25Count  *int32 `json:"playback_25_count"`
	Playback50Count  *int32 `json:"playback_50_count"`
	Playback75Count  *int32 `json:"playback_75_count"`
	ViewCount        *int32 `json:"view_count"`
}

type VideoPublicMetrics struct {
	ViewCount *int32 `json:"view_count"`
}

type VideoTypeEnum string

const (
	VideoTypeEnumVideo VideoTypeEnum = "video"
)

type Video struct {
	DurationMs       *int64                 `json:"duration_ms"`
	Height           *int64                 `json:"height"`
	MediaKey         *string                `json:"media_key"`
	NonPublicMetrics *VideoNonPublicMetrics `json:"non_public_metrics"`
	OrganicMetrics   *VideoOrganicMetrics   `json:"organic_metrics"`
	PreviewImageURL  *string                `json:"preview_image_url"`
	PromotedMetrics  *VideoPromotedMetrics  `json:"promoted_metrics"`
	PublicMetrics    *VideoPublicMetrics    `json:"public_metrics"`
	Type             *VideoTypeEnum         `json:"type"`
	Width            *int64                 `json:"width"`
}
