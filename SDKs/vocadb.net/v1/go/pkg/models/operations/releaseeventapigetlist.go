package operations

import (
"time"
"openapi/pkg/models/shared")


type ReleaseEventAPIGetListCategoryEnum string

const (
    ReleaseEventAPIGetListCategoryEnumUnspecified ReleaseEventAPIGetListCategoryEnum = "Unspecified"
ReleaseEventAPIGetListCategoryEnumAlbumRelease ReleaseEventAPIGetListCategoryEnum = "AlbumRelease"
ReleaseEventAPIGetListCategoryEnumAnniversary ReleaseEventAPIGetListCategoryEnum = "Anniversary"
ReleaseEventAPIGetListCategoryEnumClub ReleaseEventAPIGetListCategoryEnum = "Club"
ReleaseEventAPIGetListCategoryEnumConcert ReleaseEventAPIGetListCategoryEnum = "Concert"
ReleaseEventAPIGetListCategoryEnumContest ReleaseEventAPIGetListCategoryEnum = "Contest"
ReleaseEventAPIGetListCategoryEnumConvention ReleaseEventAPIGetListCategoryEnum = "Convention"
ReleaseEventAPIGetListCategoryEnumOther ReleaseEventAPIGetListCategoryEnum = "Other"
)



type ReleaseEventAPIGetListFieldsEnum string

const (
    ReleaseEventAPIGetListFieldsEnumNone ReleaseEventAPIGetListFieldsEnum = "None"
ReleaseEventAPIGetListFieldsEnumAdditionalNames ReleaseEventAPIGetListFieldsEnum = "AdditionalNames"
ReleaseEventAPIGetListFieldsEnumArtists ReleaseEventAPIGetListFieldsEnum = "Artists"
ReleaseEventAPIGetListFieldsEnumDescription ReleaseEventAPIGetListFieldsEnum = "Description"
ReleaseEventAPIGetListFieldsEnumMainPicture ReleaseEventAPIGetListFieldsEnum = "MainPicture"
ReleaseEventAPIGetListFieldsEnumNames ReleaseEventAPIGetListFieldsEnum = "Names"
ReleaseEventAPIGetListFieldsEnumSeries ReleaseEventAPIGetListFieldsEnum = "Series"
ReleaseEventAPIGetListFieldsEnumSongList ReleaseEventAPIGetListFieldsEnum = "SongList"
ReleaseEventAPIGetListFieldsEnumTags ReleaseEventAPIGetListFieldsEnum = "Tags"
ReleaseEventAPIGetListFieldsEnumVenue ReleaseEventAPIGetListFieldsEnum = "Venue"
ReleaseEventAPIGetListFieldsEnumWebLinks ReleaseEventAPIGetListFieldsEnum = "WebLinks"
)



type ReleaseEventAPIGetListLangEnum string

const (
    ReleaseEventAPIGetListLangEnumDefault ReleaseEventAPIGetListLangEnum = "Default"
ReleaseEventAPIGetListLangEnumJapanese ReleaseEventAPIGetListLangEnum = "Japanese"
ReleaseEventAPIGetListLangEnumRomaji ReleaseEventAPIGetListLangEnum = "Romaji"
ReleaseEventAPIGetListLangEnumEnglish ReleaseEventAPIGetListLangEnum = "English"
)



type ReleaseEventAPIGetListNameMatchModeEnum string

const (
    ReleaseEventAPIGetListNameMatchModeEnumAuto ReleaseEventAPIGetListNameMatchModeEnum = "Auto"
ReleaseEventAPIGetListNameMatchModeEnumPartial ReleaseEventAPIGetListNameMatchModeEnum = "Partial"
ReleaseEventAPIGetListNameMatchModeEnumStartsWith ReleaseEventAPIGetListNameMatchModeEnum = "StartsWith"
ReleaseEventAPIGetListNameMatchModeEnumExact ReleaseEventAPIGetListNameMatchModeEnum = "Exact"
ReleaseEventAPIGetListNameMatchModeEnumWords ReleaseEventAPIGetListNameMatchModeEnum = "Words"
)



type ReleaseEventAPIGetListSortEnum string

const (
    ReleaseEventAPIGetListSortEnumNone ReleaseEventAPIGetListSortEnum = "None"
ReleaseEventAPIGetListSortEnumName ReleaseEventAPIGetListSortEnum = "Name"
ReleaseEventAPIGetListSortEnumDate ReleaseEventAPIGetListSortEnum = "Date"
ReleaseEventAPIGetListSortEnumAdditionDate ReleaseEventAPIGetListSortEnum = "AdditionDate"
ReleaseEventAPIGetListSortEnumSeriesName ReleaseEventAPIGetListSortEnum = "SeriesName"
ReleaseEventAPIGetListSortEnumVenueName ReleaseEventAPIGetListSortEnum = "VenueName"
)



type ReleaseEventAPIGetListStatusEnum string

const (
    ReleaseEventAPIGetListStatusEnumDraft ReleaseEventAPIGetListStatusEnum = "Draft"
ReleaseEventAPIGetListStatusEnumFinished ReleaseEventAPIGetListStatusEnum = "Finished"
ReleaseEventAPIGetListStatusEnumApproved ReleaseEventAPIGetListStatusEnum = "Approved"
ReleaseEventAPIGetListStatusEnumLocked ReleaseEventAPIGetListStatusEnum = "Locked"
)


type ReleaseEventAPIGetListQueryParams struct {
    AfterDate *time.Time `queryParam:"style=form,explode=true,name=afterDate"`
    ArtistID []int32 `queryParam:"style=form,explode=true,name=artistId"`
    BeforeDate *time.Time `queryParam:"style=form,explode=true,name=beforeDate"`
    Category *ReleaseEventAPIGetListCategoryEnum `queryParam:"style=form,explode=true,name=category"`
    ChildTags *bool `queryParam:"style=form,explode=true,name=childTags"`
    ChildVoicebanks *bool `queryParam:"style=form,explode=true,name=childVoicebanks"`
    Fields *ReleaseEventAPIGetListFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    IncludeMembers *bool `queryParam:"style=form,explode=true,name=includeMembers"`
    Lang *ReleaseEventAPIGetListLangEnum `queryParam:"style=form,explode=true,name=lang"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    NameMatchMode *ReleaseEventAPIGetListNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    SeriesID *int32 `queryParam:"style=form,explode=true,name=seriesId"`
    Sort *ReleaseEventAPIGetListSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    Status *ReleaseEventAPIGetListStatusEnum `queryParam:"style=form,explode=true,name=status"`
    TagID []int32 `queryParam:"style=form,explode=true,name=tagId"`
    UserCollectionID *int32 `queryParam:"style=form,explode=true,name=userCollectionId"`
    
}

type ReleaseEventAPIGetListRequest struct {
    QueryParams ReleaseEventAPIGetListQueryParams 
    
}

type ReleaseEventAPIGetListResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultReleaseEventForAPIContract *shared.PartialFindResultReleaseEventForAPIContract 
    StatusCode int64 
    
}

