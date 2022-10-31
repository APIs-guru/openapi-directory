package operations

import (
"openapi/pkg/models/shared")


type DiscussionAPIGetFoldersFieldsEnum string

const (
    DiscussionAPIGetFoldersFieldsEnumNone DiscussionAPIGetFoldersFieldsEnum = "None"
DiscussionAPIGetFoldersFieldsEnumLastTopic DiscussionAPIGetFoldersFieldsEnum = "LastTopic"
DiscussionAPIGetFoldersFieldsEnumTopicCount DiscussionAPIGetFoldersFieldsEnum = "TopicCount"
)


type DiscussionAPIGetFoldersQueryParams struct {
    Fields *DiscussionAPIGetFoldersFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    
}

type DiscussionAPIGetFoldersRequest struct {
    QueryParams DiscussionAPIGetFoldersQueryParams 
    
}

type DiscussionAPIGetFoldersResponse struct {
    Body []byte 
    ContentType string 
    DiscussionFolderContracts []shared.DiscussionFolderContract 
    StatusCode int64 
    
}

