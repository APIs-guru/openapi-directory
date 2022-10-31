package operations

import (
"time"
"openapi/pkg/models/shared")


type SongAPIGetListArtistParticipationStatusEnum string

const (
    SongAPIGetListArtistParticipationStatusEnumEverything SongAPIGetListArtistParticipationStatusEnum = "Everything"
SongAPIGetListArtistParticipationStatusEnumOnlyMainAlbums SongAPIGetListArtistParticipationStatusEnum = "OnlyMainAlbums"
SongAPIGetListArtistParticipationStatusEnumOnlyCollaborations SongAPIGetListArtistParticipationStatusEnum = "OnlyCollaborations"
)



type SongAPIGetListFieldsEnum string

const (
    SongAPIGetListFieldsEnumNone SongAPIGetListFieldsEnum = "None"
SongAPIGetListFieldsEnumAdditionalNames SongAPIGetListFieldsEnum = "AdditionalNames"
SongAPIGetListFieldsEnumAlbums SongAPIGetListFieldsEnum = "Albums"
SongAPIGetListFieldsEnumArtists SongAPIGetListFieldsEnum = "Artists"
SongAPIGetListFieldsEnumLyrics SongAPIGetListFieldsEnum = "Lyrics"
SongAPIGetListFieldsEnumMainPicture SongAPIGetListFieldsEnum = "MainPicture"
SongAPIGetListFieldsEnumNames SongAPIGetListFieldsEnum = "Names"
SongAPIGetListFieldsEnumPVs SongAPIGetListFieldsEnum = "PVs"
SongAPIGetListFieldsEnumReleaseEvent SongAPIGetListFieldsEnum = "ReleaseEvent"
SongAPIGetListFieldsEnumTags SongAPIGetListFieldsEnum = "Tags"
SongAPIGetListFieldsEnumThumbURL SongAPIGetListFieldsEnum = "ThumbUrl"
SongAPIGetListFieldsEnumWebLinks SongAPIGetListFieldsEnum = "WebLinks"
)



type SongAPIGetListLangEnum string

const (
    SongAPIGetListLangEnumDefault SongAPIGetListLangEnum = "Default"
SongAPIGetListLangEnumJapanese SongAPIGetListLangEnum = "Japanese"
SongAPIGetListLangEnumRomaji SongAPIGetListLangEnum = "Romaji"
SongAPIGetListLangEnumEnglish SongAPIGetListLangEnum = "English"
)



type SongAPIGetListNameMatchModeEnum string

const (
    SongAPIGetListNameMatchModeEnumAuto SongAPIGetListNameMatchModeEnum = "Auto"
SongAPIGetListNameMatchModeEnumPartial SongAPIGetListNameMatchModeEnum = "Partial"
SongAPIGetListNameMatchModeEnumStartsWith SongAPIGetListNameMatchModeEnum = "StartsWith"
SongAPIGetListNameMatchModeEnumExact SongAPIGetListNameMatchModeEnum = "Exact"
SongAPIGetListNameMatchModeEnumWords SongAPIGetListNameMatchModeEnum = "Words"
)



type SongAPIGetListPvServicesEnum string

const (
    SongAPIGetListPvServicesEnumNothing SongAPIGetListPvServicesEnum = "Nothing"
SongAPIGetListPvServicesEnumNicoNicoDouga SongAPIGetListPvServicesEnum = "NicoNicoDouga"
SongAPIGetListPvServicesEnumYoutube SongAPIGetListPvServicesEnum = "Youtube"
SongAPIGetListPvServicesEnumSoundCloud SongAPIGetListPvServicesEnum = "SoundCloud"
SongAPIGetListPvServicesEnumVimeo SongAPIGetListPvServicesEnum = "Vimeo"
SongAPIGetListPvServicesEnumPiapro SongAPIGetListPvServicesEnum = "Piapro"
SongAPIGetListPvServicesEnumBilibili SongAPIGetListPvServicesEnum = "Bilibili"
SongAPIGetListPvServicesEnumFile SongAPIGetListPvServicesEnum = "File"
SongAPIGetListPvServicesEnumLocalFile SongAPIGetListPvServicesEnum = "LocalFile"
SongAPIGetListPvServicesEnumCreofuga SongAPIGetListPvServicesEnum = "Creofuga"
SongAPIGetListPvServicesEnumBandcamp SongAPIGetListPvServicesEnum = "Bandcamp"
)



type SongAPIGetListSortEnum string

const (
    SongAPIGetListSortEnumNone SongAPIGetListSortEnum = "None"
SongAPIGetListSortEnumName SongAPIGetListSortEnum = "Name"
SongAPIGetListSortEnumAdditionDate SongAPIGetListSortEnum = "AdditionDate"
SongAPIGetListSortEnumPublishDate SongAPIGetListSortEnum = "PublishDate"
SongAPIGetListSortEnumFavoritedTimes SongAPIGetListSortEnum = "FavoritedTimes"
SongAPIGetListSortEnumRatingScore SongAPIGetListSortEnum = "RatingScore"
SongAPIGetListSortEnumTagUsageCount SongAPIGetListSortEnum = "TagUsageCount"
)



type SongAPIGetListStatusEnum string

const (
    SongAPIGetListStatusEnumDraft SongAPIGetListStatusEnum = "Draft"
SongAPIGetListStatusEnumFinished SongAPIGetListStatusEnum = "Finished"
SongAPIGetListStatusEnumApproved SongAPIGetListStatusEnum = "Approved"
SongAPIGetListStatusEnumLocked SongAPIGetListStatusEnum = "Locked"
)


type SongAPIGetListQueryParams struct {
    AdvancedFilters []interface{} `queryParam:"style=form,explode=true,name=advancedFilters"`
    AfterDate *time.Time `queryParam:"style=form,explode=true,name=afterDate"`
    ArtistID []int32 `queryParam:"style=form,explode=true,name=artistId"`
    ArtistParticipationStatus *SongAPIGetListArtistParticipationStatusEnum `queryParam:"style=form,explode=true,name=artistParticipationStatus"`
    BeforeDate *time.Time `queryParam:"style=form,explode=true,name=beforeDate"`
    ChildTags *bool `queryParam:"style=form,explode=true,name=childTags"`
    ChildVoicebanks *bool `queryParam:"style=form,explode=true,name=childVoicebanks"`
    Fields *SongAPIGetListFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    IncludeMembers *bool `queryParam:"style=form,explode=true,name=includeMembers"`
    Lang *SongAPIGetListLangEnum `queryParam:"style=form,explode=true,name=lang"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    MinScore *int32 `queryParam:"style=form,explode=true,name=minScore"`
    NameMatchMode *SongAPIGetListNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
    OnlyWithPvs *bool `queryParam:"style=form,explode=true,name=onlyWithPvs"`
    ParentSongID *int32 `queryParam:"style=form,explode=true,name=parentSongId"`
    PreferAccurateMatches *bool `queryParam:"style=form,explode=true,name=preferAccurateMatches"`
    PvServices *SongAPIGetListPvServicesEnum `queryParam:"style=form,explode=true,name=pvServices"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    ReleaseEventID *int32 `queryParam:"style=form,explode=true,name=releaseEventId"`
    Since *int32 `queryParam:"style=form,explode=true,name=since"`
    SongTypes *string `queryParam:"style=form,explode=true,name=songTypes"`
    Sort *SongAPIGetListSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    Status *SongAPIGetListStatusEnum `queryParam:"style=form,explode=true,name=status"`
    TagID []int32 `queryParam:"style=form,explode=true,name=tagId"`
    TagName []string `queryParam:"style=form,explode=true,name=tagName"`
    UnifyTypesAndTags *bool `queryParam:"style=form,explode=true,name=unifyTypesAndTags"`
    UserCollectionID *int32 `queryParam:"style=form,explode=true,name=userCollectionId"`
    
}

type SongAPIGetListRequest struct {
    QueryParams SongAPIGetListQueryParams 
    
}

type SongAPIGetListResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultSongForAPIContract *shared.PartialFindResultSongForAPIContract 
    StatusCode int64 
    
}

