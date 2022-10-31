package operations

import (
"openapi/pkg/models/shared")


type TagAPIGetTopTagsEntryTypeEnum string

const (
    TagAPIGetTopTagsEntryTypeEnumUndefined TagAPIGetTopTagsEntryTypeEnum = "Undefined"
TagAPIGetTopTagsEntryTypeEnumAlbum TagAPIGetTopTagsEntryTypeEnum = "Album"
TagAPIGetTopTagsEntryTypeEnumArtist TagAPIGetTopTagsEntryTypeEnum = "Artist"
TagAPIGetTopTagsEntryTypeEnumDiscussionTopic TagAPIGetTopTagsEntryTypeEnum = "DiscussionTopic"
TagAPIGetTopTagsEntryTypeEnumPv TagAPIGetTopTagsEntryTypeEnum = "PV"
TagAPIGetTopTagsEntryTypeEnumReleaseEvent TagAPIGetTopTagsEntryTypeEnum = "ReleaseEvent"
TagAPIGetTopTagsEntryTypeEnumReleaseEventSeries TagAPIGetTopTagsEntryTypeEnum = "ReleaseEventSeries"
TagAPIGetTopTagsEntryTypeEnumSong TagAPIGetTopTagsEntryTypeEnum = "Song"
TagAPIGetTopTagsEntryTypeEnumSongList TagAPIGetTopTagsEntryTypeEnum = "SongList"
TagAPIGetTopTagsEntryTypeEnumTag TagAPIGetTopTagsEntryTypeEnum = "Tag"
TagAPIGetTopTagsEntryTypeEnumUser TagAPIGetTopTagsEntryTypeEnum = "User"
TagAPIGetTopTagsEntryTypeEnumVenue TagAPIGetTopTagsEntryTypeEnum = "Venue"
)



type TagAPIGetTopTagsLangEnum string

const (
    TagAPIGetTopTagsLangEnumDefault TagAPIGetTopTagsLangEnum = "Default"
TagAPIGetTopTagsLangEnumJapanese TagAPIGetTopTagsLangEnum = "Japanese"
TagAPIGetTopTagsLangEnumRomaji TagAPIGetTopTagsLangEnum = "Romaji"
TagAPIGetTopTagsLangEnumEnglish TagAPIGetTopTagsLangEnum = "English"
)


type TagAPIGetTopTagsQueryParams struct {
    CategoryName *string `queryParam:"style=form,explode=true,name=categoryName"`
    EntryType *TagAPIGetTopTagsEntryTypeEnum `queryParam:"style=form,explode=true,name=entryType"`
    Lang *TagAPIGetTopTagsLangEnum `queryParam:"style=form,explode=true,name=lang"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    
}

type TagAPIGetTopTagsRequest struct {
    QueryParams TagAPIGetTopTagsQueryParams 
    
}

type TagAPIGetTopTagsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TagBaseContracts []shared.TagBaseContract 
    
}

