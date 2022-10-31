package operations

import (
"openapi/pkg/models/shared")


type EntryAPIGetListEntryTypesEnum string

const (
    EntryAPIGetListEntryTypesEnumNothing EntryAPIGetListEntryTypesEnum = "Nothing"
EntryAPIGetListEntryTypesEnumAlbum EntryAPIGetListEntryTypesEnum = "Album"
EntryAPIGetListEntryTypesEnumArtist EntryAPIGetListEntryTypesEnum = "Artist"
EntryAPIGetListEntryTypesEnumDiscussionTopic EntryAPIGetListEntryTypesEnum = "DiscussionTopic"
EntryAPIGetListEntryTypesEnumPv EntryAPIGetListEntryTypesEnum = "PV"
EntryAPIGetListEntryTypesEnumReleaseEvent EntryAPIGetListEntryTypesEnum = "ReleaseEvent"
EntryAPIGetListEntryTypesEnumReleaseEventSeries EntryAPIGetListEntryTypesEnum = "ReleaseEventSeries"
EntryAPIGetListEntryTypesEnumSong EntryAPIGetListEntryTypesEnum = "Song"
EntryAPIGetListEntryTypesEnumSongList EntryAPIGetListEntryTypesEnum = "SongList"
EntryAPIGetListEntryTypesEnumTag EntryAPIGetListEntryTypesEnum = "Tag"
EntryAPIGetListEntryTypesEnumUser EntryAPIGetListEntryTypesEnum = "User"
EntryAPIGetListEntryTypesEnumVenue EntryAPIGetListEntryTypesEnum = "Venue"
)



type EntryAPIGetListFieldsEnum string

const (
    EntryAPIGetListFieldsEnumNone EntryAPIGetListFieldsEnum = "None"
EntryAPIGetListFieldsEnumAdditionalNames EntryAPIGetListFieldsEnum = "AdditionalNames"
EntryAPIGetListFieldsEnumDescription EntryAPIGetListFieldsEnum = "Description"
EntryAPIGetListFieldsEnumMainPicture EntryAPIGetListFieldsEnum = "MainPicture"
EntryAPIGetListFieldsEnumNames EntryAPIGetListFieldsEnum = "Names"
EntryAPIGetListFieldsEnumPVs EntryAPIGetListFieldsEnum = "PVs"
EntryAPIGetListFieldsEnumTags EntryAPIGetListFieldsEnum = "Tags"
EntryAPIGetListFieldsEnumWebLinks EntryAPIGetListFieldsEnum = "WebLinks"
)



type EntryAPIGetListLangEnum string

const (
    EntryAPIGetListLangEnumDefault EntryAPIGetListLangEnum = "Default"
EntryAPIGetListLangEnumJapanese EntryAPIGetListLangEnum = "Japanese"
EntryAPIGetListLangEnumRomaji EntryAPIGetListLangEnum = "Romaji"
EntryAPIGetListLangEnumEnglish EntryAPIGetListLangEnum = "English"
)



type EntryAPIGetListNameMatchModeEnum string

const (
    EntryAPIGetListNameMatchModeEnumAuto EntryAPIGetListNameMatchModeEnum = "Auto"
EntryAPIGetListNameMatchModeEnumPartial EntryAPIGetListNameMatchModeEnum = "Partial"
EntryAPIGetListNameMatchModeEnumStartsWith EntryAPIGetListNameMatchModeEnum = "StartsWith"
EntryAPIGetListNameMatchModeEnumExact EntryAPIGetListNameMatchModeEnum = "Exact"
EntryAPIGetListNameMatchModeEnumWords EntryAPIGetListNameMatchModeEnum = "Words"
)



type EntryAPIGetListSortEnum string

const (
    EntryAPIGetListSortEnumNone EntryAPIGetListSortEnum = "None"
EntryAPIGetListSortEnumName EntryAPIGetListSortEnum = "Name"
EntryAPIGetListSortEnumAdditionDate EntryAPIGetListSortEnum = "AdditionDate"
EntryAPIGetListSortEnumActivityDate EntryAPIGetListSortEnum = "ActivityDate"
)



type EntryAPIGetListStatusEnum string

const (
    EntryAPIGetListStatusEnumDraft EntryAPIGetListStatusEnum = "Draft"
EntryAPIGetListStatusEnumFinished EntryAPIGetListStatusEnum = "Finished"
EntryAPIGetListStatusEnumApproved EntryAPIGetListStatusEnum = "Approved"
EntryAPIGetListStatusEnumLocked EntryAPIGetListStatusEnum = "Locked"
)


type EntryAPIGetListQueryParams struct {
    ChildTags *bool `queryParam:"style=form,explode=true,name=childTags"`
    EntryTypes *EntryAPIGetListEntryTypesEnum `queryParam:"style=form,explode=true,name=entryTypes"`
    Fields *EntryAPIGetListFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    Lang *EntryAPIGetListLangEnum `queryParam:"style=form,explode=true,name=lang"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    NameMatchMode *EntryAPIGetListNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *EntryAPIGetListSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    Status *EntryAPIGetListStatusEnum `queryParam:"style=form,explode=true,name=status"`
    TagID []int32 `queryParam:"style=form,explode=true,name=tagId"`
    TagName []string `queryParam:"style=form,explode=true,name=tagName"`
    
}

type EntryAPIGetListRequest struct {
    QueryParams EntryAPIGetListQueryParams 
    
}

type EntryAPIGetListResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultEntryForAPIContract *shared.PartialFindResultEntryForAPIContract 
    StatusCode int64 
    
}

