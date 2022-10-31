package operations

import (
"openapi/pkg/models/shared")


type DiscussionAPIGetTopicsFieldsEnum string

const (
    DiscussionAPIGetTopicsFieldsEnumNone DiscussionAPIGetTopicsFieldsEnum = "None"
DiscussionAPIGetTopicsFieldsEnumComments DiscussionAPIGetTopicsFieldsEnum = "Comments"
DiscussionAPIGetTopicsFieldsEnumCommentCount DiscussionAPIGetTopicsFieldsEnum = "CommentCount"
DiscussionAPIGetTopicsFieldsEnumContent DiscussionAPIGetTopicsFieldsEnum = "Content"
DiscussionAPIGetTopicsFieldsEnumLastComment DiscussionAPIGetTopicsFieldsEnum = "LastComment"
DiscussionAPIGetTopicsFieldsEnumAll DiscussionAPIGetTopicsFieldsEnum = "All"
)



type DiscussionAPIGetTopicsSortEnum string

const (
    DiscussionAPIGetTopicsSortEnumNone DiscussionAPIGetTopicsSortEnum = "None"
DiscussionAPIGetTopicsSortEnumName DiscussionAPIGetTopicsSortEnum = "Name"
DiscussionAPIGetTopicsSortEnumDateCreated DiscussionAPIGetTopicsSortEnum = "DateCreated"
DiscussionAPIGetTopicsSortEnumLastCommentDate DiscussionAPIGetTopicsSortEnum = "LastCommentDate"
)


type DiscussionAPIGetTopicsQueryParams struct {
    Fields *DiscussionAPIGetTopicsFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    FolderID *int32 `queryParam:"style=form,explode=true,name=folderId"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    Sort *DiscussionAPIGetTopicsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    
}

type DiscussionAPIGetTopicsRequest struct {
    QueryParams DiscussionAPIGetTopicsQueryParams 
    
}

type DiscussionAPIGetTopicsResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultDiscussionTopicContract *shared.PartialFindResultDiscussionTopicContract 
    StatusCode int64 
    
}

