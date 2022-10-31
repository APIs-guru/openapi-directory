package operations

import (
"time"
"openapi/pkg/models/shared")


type ActivityEntryAPIGetListEditEventEnum string

const (
    ActivityEntryAPIGetListEditEventEnumCreated ActivityEntryAPIGetListEditEventEnum = "Created"
ActivityEntryAPIGetListEditEventEnumUpdated ActivityEntryAPIGetListEditEventEnum = "Updated"
ActivityEntryAPIGetListEditEventEnumDeleted ActivityEntryAPIGetListEditEventEnum = "Deleted"
ActivityEntryAPIGetListEditEventEnumRestored ActivityEntryAPIGetListEditEventEnum = "Restored"
)



type ActivityEntryAPIGetListEntryFieldsEnum string

const (
    ActivityEntryAPIGetListEntryFieldsEnumNone ActivityEntryAPIGetListEntryFieldsEnum = "None"
ActivityEntryAPIGetListEntryFieldsEnumAdditionalNames ActivityEntryAPIGetListEntryFieldsEnum = "AdditionalNames"
ActivityEntryAPIGetListEntryFieldsEnumDescription ActivityEntryAPIGetListEntryFieldsEnum = "Description"
ActivityEntryAPIGetListEntryFieldsEnumMainPicture ActivityEntryAPIGetListEntryFieldsEnum = "MainPicture"
ActivityEntryAPIGetListEntryFieldsEnumNames ActivityEntryAPIGetListEntryFieldsEnum = "Names"
ActivityEntryAPIGetListEntryFieldsEnumPVs ActivityEntryAPIGetListEntryFieldsEnum = "PVs"
ActivityEntryAPIGetListEntryFieldsEnumTags ActivityEntryAPIGetListEntryFieldsEnum = "Tags"
ActivityEntryAPIGetListEntryFieldsEnumWebLinks ActivityEntryAPIGetListEntryFieldsEnum = "WebLinks"
)



type ActivityEntryAPIGetListEntryTypeEnum string

const (
    ActivityEntryAPIGetListEntryTypeEnumUndefined ActivityEntryAPIGetListEntryTypeEnum = "Undefined"
ActivityEntryAPIGetListEntryTypeEnumAlbum ActivityEntryAPIGetListEntryTypeEnum = "Album"
ActivityEntryAPIGetListEntryTypeEnumArtist ActivityEntryAPIGetListEntryTypeEnum = "Artist"
ActivityEntryAPIGetListEntryTypeEnumDiscussionTopic ActivityEntryAPIGetListEntryTypeEnum = "DiscussionTopic"
ActivityEntryAPIGetListEntryTypeEnumPv ActivityEntryAPIGetListEntryTypeEnum = "PV"
ActivityEntryAPIGetListEntryTypeEnumReleaseEvent ActivityEntryAPIGetListEntryTypeEnum = "ReleaseEvent"
ActivityEntryAPIGetListEntryTypeEnumReleaseEventSeries ActivityEntryAPIGetListEntryTypeEnum = "ReleaseEventSeries"
ActivityEntryAPIGetListEntryTypeEnumSong ActivityEntryAPIGetListEntryTypeEnum = "Song"
ActivityEntryAPIGetListEntryTypeEnumSongList ActivityEntryAPIGetListEntryTypeEnum = "SongList"
ActivityEntryAPIGetListEntryTypeEnumTag ActivityEntryAPIGetListEntryTypeEnum = "Tag"
ActivityEntryAPIGetListEntryTypeEnumUser ActivityEntryAPIGetListEntryTypeEnum = "User"
ActivityEntryAPIGetListEntryTypeEnumVenue ActivityEntryAPIGetListEntryTypeEnum = "Venue"
)



type ActivityEntryAPIGetListFieldsEnum string

const (
    ActivityEntryAPIGetListFieldsEnumNone ActivityEntryAPIGetListFieldsEnum = "None"
ActivityEntryAPIGetListFieldsEnumArchivedVersion ActivityEntryAPIGetListFieldsEnum = "ArchivedVersion"
ActivityEntryAPIGetListFieldsEnumEntry ActivityEntryAPIGetListFieldsEnum = "Entry"
)



type ActivityEntryAPIGetListLangEnum string

const (
    ActivityEntryAPIGetListLangEnumDefault ActivityEntryAPIGetListLangEnum = "Default"
ActivityEntryAPIGetListLangEnumJapanese ActivityEntryAPIGetListLangEnum = "Japanese"
ActivityEntryAPIGetListLangEnumRomaji ActivityEntryAPIGetListLangEnum = "Romaji"
ActivityEntryAPIGetListLangEnumEnglish ActivityEntryAPIGetListLangEnum = "English"
)



type ActivityEntryAPIGetListSortRuleEnum string

const (
    ActivityEntryAPIGetListSortRuleEnumCreateDateDescending ActivityEntryAPIGetListSortRuleEnum = "CreateDateDescending"
ActivityEntryAPIGetListSortRuleEnumCreateDate ActivityEntryAPIGetListSortRuleEnum = "CreateDate"
)


type ActivityEntryAPIGetListQueryParams struct {
    Before *time.Time `queryParam:"style=form,explode=true,name=before"`
    EditEvent *ActivityEntryAPIGetListEditEventEnum `queryParam:"style=form,explode=true,name=editEvent"`
    EntryFields *ActivityEntryAPIGetListEntryFieldsEnum `queryParam:"style=form,explode=true,name=entryFields"`
    EntryType *ActivityEntryAPIGetListEntryTypeEnum `queryParam:"style=form,explode=true,name=entryType"`
    Fields *ActivityEntryAPIGetListFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    Lang *ActivityEntryAPIGetListLangEnum `queryParam:"style=form,explode=true,name=lang"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    Since *time.Time `queryParam:"style=form,explode=true,name=since"`
    SortRule *ActivityEntryAPIGetListSortRuleEnum `queryParam:"style=form,explode=true,name=sortRule"`
    UserID *int32 `queryParam:"style=form,explode=true,name=userId"`
    
}

type ActivityEntryAPIGetListRequest struct {
    QueryParams ActivityEntryAPIGetListQueryParams 
    
}

type ActivityEntryAPIGetListResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultActivityEntryForAPIContract *shared.PartialFindResultActivityEntryForAPIContract 
    StatusCode int64 
    
}

