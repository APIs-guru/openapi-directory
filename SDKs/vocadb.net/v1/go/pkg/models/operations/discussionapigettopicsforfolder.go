package operations

import (
"openapi/pkg/models/shared")

type DiscussionAPIGetTopicsForFolderPathParams struct {
    FolderID int32 `pathParam:"style=simple,explode=false,name=folderId"`
    
}


type DiscussionAPIGetTopicsForFolderFieldsEnum string

const (
    DiscussionAPIGetTopicsForFolderFieldsEnumNone DiscussionAPIGetTopicsForFolderFieldsEnum = "None"
DiscussionAPIGetTopicsForFolderFieldsEnumComments DiscussionAPIGetTopicsForFolderFieldsEnum = "Comments"
DiscussionAPIGetTopicsForFolderFieldsEnumCommentCount DiscussionAPIGetTopicsForFolderFieldsEnum = "CommentCount"
DiscussionAPIGetTopicsForFolderFieldsEnumContent DiscussionAPIGetTopicsForFolderFieldsEnum = "Content"
DiscussionAPIGetTopicsForFolderFieldsEnumLastComment DiscussionAPIGetTopicsForFolderFieldsEnum = "LastComment"
DiscussionAPIGetTopicsForFolderFieldsEnumAll DiscussionAPIGetTopicsForFolderFieldsEnum = "All"
)


type DiscussionAPIGetTopicsForFolderQueryParams struct {
    Fields *DiscussionAPIGetTopicsForFolderFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    
}

type DiscussionAPIGetTopicsForFolderRequest struct {
    PathParams DiscussionAPIGetTopicsForFolderPathParams 
    QueryParams DiscussionAPIGetTopicsForFolderQueryParams 
    
}

type DiscussionAPIGetTopicsForFolderResponse struct {
    Body []byte 
    ContentType string 
    DiscussionTopicContracts []shared.DiscussionTopicContract 
    StatusCode int64 
    
}

