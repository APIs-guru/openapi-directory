package operations

type DiscussionAPIDeleteTopicPathParams struct {
	TopicID int32 `pathParam:"style=simple,explode=false,name=topicId"`
}

type DiscussionAPIDeleteTopicRequest struct {
	PathParams DiscussionAPIDeleteTopicPathParams
}

type DiscussionAPIDeleteTopicResponse struct {
	ContentType string
	StatusCode  int64
}
