package shared

type ChartCacheScreenshotResponseSchema struct {
	CacheKey *string `json:"cache_key"`
	ChartURL *string `json:"chart_url"`
	ImageURL *string `json:"image_url"`
}
