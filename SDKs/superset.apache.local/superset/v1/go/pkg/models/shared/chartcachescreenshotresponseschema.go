package shared

type ChartCacheScreenshotResponseSchema struct {
	CacheKey *string `json:"cache_key,omitempty"`
	ChartURL *string `json:"chart_url,omitempty"`
	ImageURL *string `json:"image_url,omitempty"`
}
