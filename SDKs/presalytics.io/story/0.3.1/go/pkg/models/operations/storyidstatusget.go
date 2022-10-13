package operations

type StoryIDStatusGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type StoryIDStatusGetRequest struct {
	PathParams StoryIDStatusGetPathParams
}

type StoryIDStatusGetResponse struct {
	ContentType   string
	StatusCode    int64
	ProblemDetail *interface{}
	Status        *interface{}
}
