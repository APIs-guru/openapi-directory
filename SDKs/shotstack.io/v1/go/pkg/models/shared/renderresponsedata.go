package shared

type RenderResponseDataStatusEnum string

const (
	RenderResponseDataStatusEnumQueued    RenderResponseDataStatusEnum = "queued"
	RenderResponseDataStatusEnumFetching  RenderResponseDataStatusEnum = "fetching"
	RenderResponseDataStatusEnumRendering RenderResponseDataStatusEnum = "rendering"
	RenderResponseDataStatusEnumSaving    RenderResponseDataStatusEnum = "saving"
	RenderResponseDataStatusEnumDone      RenderResponseDataStatusEnum = "done"
	RenderResponseDataStatusEnumFailed    RenderResponseDataStatusEnum = "failed"
)

type RenderResponseData struct {
	Created    string                       `json:"created"`
	Data       Edit                         `json:"data"`
	Duration   *float64                     `json:"duration,omitempty"`
	Error      *string                      `json:"error,omitempty"`
	ID         string                       `json:"id"`
	Owner      string                       `json:"owner"`
	Plan       *string                      `json:"plan,omitempty"`
	Poster     *string                      `json:"poster,omitempty"`
	RenderTime *float64                     `json:"renderTime,omitempty"`
	Status     RenderResponseDataStatusEnum `json:"status"`
	Thumbnail  *string                      `json:"thumbnail,omitempty"`
	Updated    string                       `json:"updated"`
	URL        *string                      `json:"url,omitempty"`
}
