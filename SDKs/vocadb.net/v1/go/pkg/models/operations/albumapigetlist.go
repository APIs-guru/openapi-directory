package operations

import (
"time"
"openapi/pkg/models/shared")


type AlbumAPIGetListArtistParticipationStatusEnum string

const (
    AlbumAPIGetListArtistParticipationStatusEnumEverything AlbumAPIGetListArtistParticipationStatusEnum = "Everything"
AlbumAPIGetListArtistParticipationStatusEnumOnlyMainAlbums AlbumAPIGetListArtistParticipationStatusEnum = "OnlyMainAlbums"
AlbumAPIGetListArtistParticipationStatusEnumOnlyCollaborations AlbumAPIGetListArtistParticipationStatusEnum = "OnlyCollaborations"
)



type AlbumAPIGetListDiscTypesEnum string

const (
    AlbumAPIGetListDiscTypesEnumUnknown AlbumAPIGetListDiscTypesEnum = "Unknown"
AlbumAPIGetListDiscTypesEnumAlbum AlbumAPIGetListDiscTypesEnum = "Album"
AlbumAPIGetListDiscTypesEnumSingle AlbumAPIGetListDiscTypesEnum = "Single"
AlbumAPIGetListDiscTypesEnumEp AlbumAPIGetListDiscTypesEnum = "EP"
AlbumAPIGetListDiscTypesEnumSplitAlbum AlbumAPIGetListDiscTypesEnum = "SplitAlbum"
AlbumAPIGetListDiscTypesEnumCompilation AlbumAPIGetListDiscTypesEnum = "Compilation"
AlbumAPIGetListDiscTypesEnumVideo AlbumAPIGetListDiscTypesEnum = "Video"
AlbumAPIGetListDiscTypesEnumArtbook AlbumAPIGetListDiscTypesEnum = "Artbook"
AlbumAPIGetListDiscTypesEnumGame AlbumAPIGetListDiscTypesEnum = "Game"
AlbumAPIGetListDiscTypesEnumFanmade AlbumAPIGetListDiscTypesEnum = "Fanmade"
AlbumAPIGetListDiscTypesEnumInstrumental AlbumAPIGetListDiscTypesEnum = "Instrumental"
AlbumAPIGetListDiscTypesEnumOther AlbumAPIGetListDiscTypesEnum = "Other"
)



type AlbumAPIGetListFieldsEnum string

const (
    AlbumAPIGetListFieldsEnumNone AlbumAPIGetListFieldsEnum = "None"
AlbumAPIGetListFieldsEnumAdditionalNames AlbumAPIGetListFieldsEnum = "AdditionalNames"
AlbumAPIGetListFieldsEnumArtists AlbumAPIGetListFieldsEnum = "Artists"
AlbumAPIGetListFieldsEnumDescription AlbumAPIGetListFieldsEnum = "Description"
AlbumAPIGetListFieldsEnumDiscs AlbumAPIGetListFieldsEnum = "Discs"
AlbumAPIGetListFieldsEnumIdentifiers AlbumAPIGetListFieldsEnum = "Identifiers"
AlbumAPIGetListFieldsEnumMainPicture AlbumAPIGetListFieldsEnum = "MainPicture"
AlbumAPIGetListFieldsEnumNames AlbumAPIGetListFieldsEnum = "Names"
AlbumAPIGetListFieldsEnumPVs AlbumAPIGetListFieldsEnum = "PVs"
AlbumAPIGetListFieldsEnumReleaseEvent AlbumAPIGetListFieldsEnum = "ReleaseEvent"
AlbumAPIGetListFieldsEnumTags AlbumAPIGetListFieldsEnum = "Tags"
AlbumAPIGetListFieldsEnumTracks AlbumAPIGetListFieldsEnum = "Tracks"
AlbumAPIGetListFieldsEnumWebLinks AlbumAPIGetListFieldsEnum = "WebLinks"
)



type AlbumAPIGetListLangEnum string

const (
    AlbumAPIGetListLangEnumDefault AlbumAPIGetListLangEnum = "Default"
AlbumAPIGetListLangEnumJapanese AlbumAPIGetListLangEnum = "Japanese"
AlbumAPIGetListLangEnumRomaji AlbumAPIGetListLangEnum = "Romaji"
AlbumAPIGetListLangEnumEnglish AlbumAPIGetListLangEnum = "English"
)



type AlbumAPIGetListNameMatchModeEnum string

const (
    AlbumAPIGetListNameMatchModeEnumAuto AlbumAPIGetListNameMatchModeEnum = "Auto"
AlbumAPIGetListNameMatchModeEnumPartial AlbumAPIGetListNameMatchModeEnum = "Partial"
AlbumAPIGetListNameMatchModeEnumStartsWith AlbumAPIGetListNameMatchModeEnum = "StartsWith"
AlbumAPIGetListNameMatchModeEnumExact AlbumAPIGetListNameMatchModeEnum = "Exact"
AlbumAPIGetListNameMatchModeEnumWords AlbumAPIGetListNameMatchModeEnum = "Words"
)



type AlbumAPIGetListSortEnum string

const (
    AlbumAPIGetListSortEnumNone AlbumAPIGetListSortEnum = "None"
AlbumAPIGetListSortEnumName AlbumAPIGetListSortEnum = "Name"
AlbumAPIGetListSortEnumReleaseDate AlbumAPIGetListSortEnum = "ReleaseDate"
AlbumAPIGetListSortEnumReleaseDateWithNulls AlbumAPIGetListSortEnum = "ReleaseDateWithNulls"
AlbumAPIGetListSortEnumAdditionDate AlbumAPIGetListSortEnum = "AdditionDate"
AlbumAPIGetListSortEnumRatingAverage AlbumAPIGetListSortEnum = "RatingAverage"
AlbumAPIGetListSortEnumRatingTotal AlbumAPIGetListSortEnum = "RatingTotal"
AlbumAPIGetListSortEnumNameThenReleaseDate AlbumAPIGetListSortEnum = "NameThenReleaseDate"
AlbumAPIGetListSortEnumCollectionCount AlbumAPIGetListSortEnum = "CollectionCount"
)



type AlbumAPIGetListStatusEnum string

const (
    AlbumAPIGetListStatusEnumDraft AlbumAPIGetListStatusEnum = "Draft"
AlbumAPIGetListStatusEnumFinished AlbumAPIGetListStatusEnum = "Finished"
AlbumAPIGetListStatusEnumApproved AlbumAPIGetListStatusEnum = "Approved"
AlbumAPIGetListStatusEnumLocked AlbumAPIGetListStatusEnum = "Locked"
)


type AlbumAPIGetListQueryParams struct {
    AdvancedFilters []interface{} `queryParam:"style=form,explode=true,name=advancedFilters"`
    ArtistID []int32 `queryParam:"style=form,explode=true,name=artistId"`
    ArtistParticipationStatus *AlbumAPIGetListArtistParticipationStatusEnum `queryParam:"style=form,explode=true,name=artistParticipationStatus"`
    Barcode *string `queryParam:"style=form,explode=true,name=barcode"`
    ChildTags *bool `queryParam:"style=form,explode=true,name=childTags"`
    ChildVoicebanks *bool `queryParam:"style=form,explode=true,name=childVoicebanks"`
    Deleted *bool `queryParam:"style=form,explode=true,name=deleted"`
    DiscTypes *AlbumAPIGetListDiscTypesEnum `queryParam:"style=form,explode=true,name=discTypes"`
    Fields *AlbumAPIGetListFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    IncludeMembers *bool `queryParam:"style=form,explode=true,name=includeMembers"`
    Lang *AlbumAPIGetListLangEnum `queryParam:"style=form,explode=true,name=lang"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    NameMatchMode *AlbumAPIGetListNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
    PreferAccurateMatches *bool `queryParam:"style=form,explode=true,name=preferAccurateMatches"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    ReleaseDateAfter *time.Time `queryParam:"style=form,explode=true,name=releaseDateAfter"`
    ReleaseDateBefore *time.Time `queryParam:"style=form,explode=true,name=releaseDateBefore"`
    Sort *AlbumAPIGetListSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    Status *AlbumAPIGetListStatusEnum `queryParam:"style=form,explode=true,name=status"`
    TagID []int32 `queryParam:"style=form,explode=true,name=tagId"`
    TagName []string `queryParam:"style=form,explode=true,name=tagName"`
    
}

type AlbumAPIGetListRequest struct {
    QueryParams AlbumAPIGetListQueryParams 
    
}

type AlbumAPIGetListResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultAlbumForAPIContract *shared.PartialFindResultAlbumForAPIContract 
    StatusCode int64 
    
}

