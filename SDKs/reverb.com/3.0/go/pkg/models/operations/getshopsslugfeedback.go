package operations

type GetShopsSlugFeedbackPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type GetShopsSlugFeedbackRequest struct {
	PathParams GetShopsSlugFeedbackPathParams
}

type GetShopsSlugFeedbackResponse struct {
	ContentType string
	StatusCode  int64
}
