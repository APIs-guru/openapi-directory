package operations

import (
"openapi/pkg/models/shared")

type DiscussionAPIGetTopicPathParams struct {
    TopicID int32 `pathParam:"style=simple,explode=false,name=topicId"`
    
}


type DiscussionAPIGetTopicFieldsEnum string

const (
    DiscussionAPIGetTopicFieldsEnumNone DiscussionAPIGetTopicFieldsEnum = "None"
DiscussionAPIGetTopicFieldsEnumComments DiscussionAPIGetTopicFieldsEnum = "Comments"
DiscussionAPIGetTopicFieldsEnumCommentCount DiscussionAPIGetTopicFieldsEnum = "CommentCount"
DiscussionAPIGetTopicFieldsEnumContent DiscussionAPIGetTopicFieldsEnum = "Content"
DiscussionAPIGetTopicFieldsEnumLastComment DiscussionAPIGetTopicFieldsEnum = "LastComment"
DiscussionAPIGetTopicFieldsEnumAll DiscussionAPIGetTopicFieldsEnum = "All"
)


type DiscussionAPIGetTopicQueryParams struct {
    Fields *DiscussionAPIGetTopicFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    
}

type DiscussionAPIGetTopicRequest struct {
    PathParams DiscussionAPIGetTopicPathParams 
    QueryParams DiscussionAPIGetTopicQueryParams 
    
}

type DiscussionAPIGetTopicResponse struct {
    Body []byte 
    ContentType string 
    DiscussionTopicContract *shared.DiscussionTopicContract 
    StatusCode int64 
    
}

