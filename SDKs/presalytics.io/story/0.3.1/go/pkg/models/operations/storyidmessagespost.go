package operations

type StoryIDMessagesPostPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type StoryIDMessagesPostRequest struct {
	PathParams StoryIDMessagesPostPathParams
	Request    string `request:"mediaType=application/json"`
}

type StoryIDMessagesPostResponse struct {
	ContentType   string
	StatusCode    int64
	ProblemDetail *interface{}
}
