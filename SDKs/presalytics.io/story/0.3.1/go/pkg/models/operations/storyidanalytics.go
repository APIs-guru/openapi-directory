package operations

type StoryIDAnalyticsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type StoryIDAnalyticsRequest struct {
	PathParams StoryIDAnalyticsPathParams
}

type StoryIDAnalyticsResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	ProblemDetail                        *interface{}
	RevealJsPresenationWithAnalyticsData *string
}
