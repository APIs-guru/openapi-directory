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
	Duration   *float64                     `json:"duration"`
	Error      *string                      `json:"error"`
	ID         string                       `json:"id"`
	Owner      string                       `json:"owner"`
	Plan       *string                      `json:"plan"`
	Poster     *string                      `json:"poster"`
	RenderTime *float64                     `json:"renderTime"`
	Status     RenderResponseDataStatusEnum `json:"status"`
	Thumbnail  *string                      `json:"thumbnail"`
	Updated    string                       `json:"updated"`
	URL        *string                      `json:"url"`
}
