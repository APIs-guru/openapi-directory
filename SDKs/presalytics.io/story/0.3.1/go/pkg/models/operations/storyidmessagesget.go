package operations

type StoryIDMessagesGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type StoryIDMessagesGetRequest struct {
	PathParams StoryIDMessagesGetPathParams
}

type StoryIDMessagesGetResponse struct {
	ContentType   string
	StatusCode    int64
	Messages      []interface{}
	ProblemDetail *interface{}
}
