package operations

type StoryIDDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type StoryIDDeleteRequest struct {
	PathParams StoryIDDeletePathParams
}

type StoryIDDeleteResponse struct {
	ContentType   string
	StatusCode    int64
	ProblemDetail *interface{}
}
