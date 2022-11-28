package shared

// VideoNonPublicMetrics
// Nonpublic engagement metrics for the Media at the time of the request.
type VideoNonPublicMetrics struct {
	Playback0Count   *int32 `json:"playback_0_count,omitempty"`
	Playback100Count *int32 `json:"playback_100_count,omitempty"`
	Playback25Count  *int32 `json:"playback_25_count,omitempty"`
	Playback50Count  *int32 `json:"playback_50_count,omitempty"`
	Playback75Count  *int32 `json:"playback_75_count,omitempty"`
}

// VideoOrganicMetrics
// Organic nonpublic engagement metrics for the Media at the time of the request.
type VideoOrganicMetrics struct {
	Playback0Count   *int32 `json:"playback_0_count,omitempty"`
	Playback100Count *int32 `json:"playback_100_count,omitempty"`
	Playback25Count  *int32 `json:"playback_25_count,omitempty"`
	Playback50Count  *int32 `json:"playback_50_count,omitempty"`
	Playback75Count  *int32 `json:"playback_75_count,omitempty"`
	ViewCount        *int32 `json:"view_count,omitempty"`
}

// VideoPromotedMetrics
// Promoted nonpublic engagement metrics for the Media at the time of the request.
type VideoPromotedMetrics struct {
	Playback0Count   *int32 `json:"playback_0_count,omitempty"`
	Playback100Count *int32 `json:"playback_100_count,omitempty"`
	Playback25Count  *int32 `json:"playback_25_count,omitempty"`
	Playback50Count  *int32 `json:"playback_50_count,omitempty"`
	Playback75Count  *int32 `json:"playback_75_count,omitempty"`
	ViewCount        *int32 `json:"view_count,omitempty"`
}

// VideoPublicMetrics
// Engagement metrics for the Media at the time of the request.
type VideoPublicMetrics struct {
	ViewCount *int32 `json:"view_count,omitempty"`
}

type VideoTypeEnum string

const (
	VideoTypeEnumVideo VideoTypeEnum = "video"
)

type Video struct {
	DurationMs       *int64                 `json:"duration_ms,omitempty"`
	Height           *int64                 `json:"height,omitempty"`
	MediaKey         *string                `json:"media_key,omitempty"`
	NonPublicMetrics *VideoNonPublicMetrics `json:"non_public_metrics,omitempty"`
	OrganicMetrics   *VideoOrganicMetrics   `json:"organic_metrics,omitempty"`
	PreviewImageURL  *string                `json:"preview_image_url,omitempty"`
	PromotedMetrics  *VideoPromotedMetrics  `json:"promoted_metrics,omitempty"`
	PublicMetrics    *VideoPublicMetrics    `json:"public_metrics,omitempty"`
	Type             *VideoTypeEnum         `json:"type,omitempty"`
	Width            *int64                 `json:"width,omitempty"`
}
