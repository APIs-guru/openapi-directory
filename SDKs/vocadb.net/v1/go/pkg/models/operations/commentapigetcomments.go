package operations

import (
"openapi/pkg/models/shared")


type CommentAPIGetCommentsEntryTypeEnum string

const (
    CommentAPIGetCommentsEntryTypeEnumUndefined CommentAPIGetCommentsEntryTypeEnum = "Undefined"
CommentAPIGetCommentsEntryTypeEnumAlbum CommentAPIGetCommentsEntryTypeEnum = "Album"
CommentAPIGetCommentsEntryTypeEnumArtist CommentAPIGetCommentsEntryTypeEnum = "Artist"
CommentAPIGetCommentsEntryTypeEnumDiscussionTopic CommentAPIGetCommentsEntryTypeEnum = "DiscussionTopic"
CommentAPIGetCommentsEntryTypeEnumPv CommentAPIGetCommentsEntryTypeEnum = "PV"
CommentAPIGetCommentsEntryTypeEnumReleaseEvent CommentAPIGetCommentsEntryTypeEnum = "ReleaseEvent"
CommentAPIGetCommentsEntryTypeEnumReleaseEventSeries CommentAPIGetCommentsEntryTypeEnum = "ReleaseEventSeries"
CommentAPIGetCommentsEntryTypeEnumSong CommentAPIGetCommentsEntryTypeEnum = "Song"
CommentAPIGetCommentsEntryTypeEnumSongList CommentAPIGetCommentsEntryTypeEnum = "SongList"
CommentAPIGetCommentsEntryTypeEnumTag CommentAPIGetCommentsEntryTypeEnum = "Tag"
CommentAPIGetCommentsEntryTypeEnumUser CommentAPIGetCommentsEntryTypeEnum = "User"
CommentAPIGetCommentsEntryTypeEnumVenue CommentAPIGetCommentsEntryTypeEnum = "Venue"
)


type CommentAPIGetCommentsPathParams struct {
    EntryType CommentAPIGetCommentsEntryTypeEnum `pathParam:"style=simple,explode=false,name=entryType"`
    
}

type CommentAPIGetCommentsQueryParams struct {
    EntryID int32 `queryParam:"style=form,explode=true,name=entryId"`
    
}

type CommentAPIGetCommentsRequest struct {
    PathParams CommentAPIGetCommentsPathParams 
    QueryParams CommentAPIGetCommentsQueryParams 
    
}

type CommentAPIGetCommentsResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultCommentForAPIContract *shared.PartialFindResultCommentForAPIContract 
    StatusCode int64 
    
}

