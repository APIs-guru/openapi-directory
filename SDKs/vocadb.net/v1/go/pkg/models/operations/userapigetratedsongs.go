package operations

import (
"openapi/pkg/models/shared")

type UserAPIGetRatedSongsPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}


type UserAPIGetRatedSongsArtistGroupingEnum string

const (
    UserAPIGetRatedSongsArtistGroupingEnumAnd UserAPIGetRatedSongsArtistGroupingEnum = "And"
UserAPIGetRatedSongsArtistGroupingEnumOr UserAPIGetRatedSongsArtistGroupingEnum = "Or"
)



type UserAPIGetRatedSongsFieldsEnum string

const (
    UserAPIGetRatedSongsFieldsEnumNone UserAPIGetRatedSongsFieldsEnum = "None"
UserAPIGetRatedSongsFieldsEnumAdditionalNames UserAPIGetRatedSongsFieldsEnum = "AdditionalNames"
UserAPIGetRatedSongsFieldsEnumAlbums UserAPIGetRatedSongsFieldsEnum = "Albums"
UserAPIGetRatedSongsFieldsEnumArtists UserAPIGetRatedSongsFieldsEnum = "Artists"
UserAPIGetRatedSongsFieldsEnumLyrics UserAPIGetRatedSongsFieldsEnum = "Lyrics"
UserAPIGetRatedSongsFieldsEnumMainPicture UserAPIGetRatedSongsFieldsEnum = "MainPicture"
UserAPIGetRatedSongsFieldsEnumNames UserAPIGetRatedSongsFieldsEnum = "Names"
UserAPIGetRatedSongsFieldsEnumPVs UserAPIGetRatedSongsFieldsEnum = "PVs"
UserAPIGetRatedSongsFieldsEnumReleaseEvent UserAPIGetRatedSongsFieldsEnum = "ReleaseEvent"
UserAPIGetRatedSongsFieldsEnumTags UserAPIGetRatedSongsFieldsEnum = "Tags"
UserAPIGetRatedSongsFieldsEnumThumbURL UserAPIGetRatedSongsFieldsEnum = "ThumbUrl"
UserAPIGetRatedSongsFieldsEnumWebLinks UserAPIGetRatedSongsFieldsEnum = "WebLinks"
)



type UserAPIGetRatedSongsLangEnum string

const (
    UserAPIGetRatedSongsLangEnumDefault UserAPIGetRatedSongsLangEnum = "Default"
UserAPIGetRatedSongsLangEnumJapanese UserAPIGetRatedSongsLangEnum = "Japanese"
UserAPIGetRatedSongsLangEnumRomaji UserAPIGetRatedSongsLangEnum = "Romaji"
UserAPIGetRatedSongsLangEnumEnglish UserAPIGetRatedSongsLangEnum = "English"
)



type UserAPIGetRatedSongsNameMatchModeEnum string

const (
    UserAPIGetRatedSongsNameMatchModeEnumAuto UserAPIGetRatedSongsNameMatchModeEnum = "Auto"
UserAPIGetRatedSongsNameMatchModeEnumPartial UserAPIGetRatedSongsNameMatchModeEnum = "Partial"
UserAPIGetRatedSongsNameMatchModeEnumStartsWith UserAPIGetRatedSongsNameMatchModeEnum = "StartsWith"
UserAPIGetRatedSongsNameMatchModeEnumExact UserAPIGetRatedSongsNameMatchModeEnum = "Exact"
UserAPIGetRatedSongsNameMatchModeEnumWords UserAPIGetRatedSongsNameMatchModeEnum = "Words"
)



type UserAPIGetRatedSongsPvServicesEnum string

const (
    UserAPIGetRatedSongsPvServicesEnumNothing UserAPIGetRatedSongsPvServicesEnum = "Nothing"
UserAPIGetRatedSongsPvServicesEnumNicoNicoDouga UserAPIGetRatedSongsPvServicesEnum = "NicoNicoDouga"
UserAPIGetRatedSongsPvServicesEnumYoutube UserAPIGetRatedSongsPvServicesEnum = "Youtube"
UserAPIGetRatedSongsPvServicesEnumSoundCloud UserAPIGetRatedSongsPvServicesEnum = "SoundCloud"
UserAPIGetRatedSongsPvServicesEnumVimeo UserAPIGetRatedSongsPvServicesEnum = "Vimeo"
UserAPIGetRatedSongsPvServicesEnumPiapro UserAPIGetRatedSongsPvServicesEnum = "Piapro"
UserAPIGetRatedSongsPvServicesEnumBilibili UserAPIGetRatedSongsPvServicesEnum = "Bilibili"
UserAPIGetRatedSongsPvServicesEnumFile UserAPIGetRatedSongsPvServicesEnum = "File"
UserAPIGetRatedSongsPvServicesEnumLocalFile UserAPIGetRatedSongsPvServicesEnum = "LocalFile"
UserAPIGetRatedSongsPvServicesEnumCreofuga UserAPIGetRatedSongsPvServicesEnum = "Creofuga"
UserAPIGetRatedSongsPvServicesEnumBandcamp UserAPIGetRatedSongsPvServicesEnum = "Bandcamp"
)



type UserAPIGetRatedSongsRatingEnum string

const (
    UserAPIGetRatedSongsRatingEnumNothing UserAPIGetRatedSongsRatingEnum = "Nothing"
UserAPIGetRatedSongsRatingEnumDislike UserAPIGetRatedSongsRatingEnum = "Dislike"
UserAPIGetRatedSongsRatingEnumLike UserAPIGetRatedSongsRatingEnum = "Like"
UserAPIGetRatedSongsRatingEnumFavorite UserAPIGetRatedSongsRatingEnum = "Favorite"
)



type UserAPIGetRatedSongsSortEnum string

const (
    UserAPIGetRatedSongsSortEnumNone UserAPIGetRatedSongsSortEnum = "None"
UserAPIGetRatedSongsSortEnumName UserAPIGetRatedSongsSortEnum = "Name"
UserAPIGetRatedSongsSortEnumAdditionDate UserAPIGetRatedSongsSortEnum = "AdditionDate"
UserAPIGetRatedSongsSortEnumPublishDate UserAPIGetRatedSongsSortEnum = "PublishDate"
UserAPIGetRatedSongsSortEnumFavoritedTimes UserAPIGetRatedSongsSortEnum = "FavoritedTimes"
UserAPIGetRatedSongsSortEnumRatingScore UserAPIGetRatedSongsSortEnum = "RatingScore"
UserAPIGetRatedSongsSortEnumRatingDate UserAPIGetRatedSongsSortEnum = "RatingDate"
)


type UserAPIGetRatedSongsQueryParams struct {
    AdvancedFilters []interface{} `queryParam:"style=form,explode=true,name=advancedFilters"`
    ArtistGrouping *UserAPIGetRatedSongsArtistGroupingEnum `queryParam:"style=form,explode=true,name=artistGrouping"`
    ArtistID []int32 `queryParam:"style=form,explode=true,name=artistId"`
    ChildVoicebanks *bool `queryParam:"style=form,explode=true,name=childVoicebanks"`
    Fields *UserAPIGetRatedSongsFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    GroupByRating *bool `queryParam:"style=form,explode=true,name=groupByRating"`
    Lang *UserAPIGetRatedSongsLangEnum `queryParam:"style=form,explode=true,name=lang"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    NameMatchMode *UserAPIGetRatedSongsNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
    PvServices *UserAPIGetRatedSongsPvServicesEnum `queryParam:"style=form,explode=true,name=pvServices"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Rating *UserAPIGetRatedSongsRatingEnum `queryParam:"style=form,explode=true,name=rating"`
    SongListID *int32 `queryParam:"style=form,explode=true,name=songListId"`
    Sort *UserAPIGetRatedSongsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    TagID []int32 `queryParam:"style=form,explode=true,name=tagId"`
    TagName *string `queryParam:"style=form,explode=true,name=tagName"`
    
}

type UserAPIGetRatedSongsRequest struct {
    PathParams UserAPIGetRatedSongsPathParams 
    QueryParams UserAPIGetRatedSongsQueryParams 
    
}

type UserAPIGetRatedSongsResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultRatedSongForUserForAPIContract *shared.PartialFindResultRatedSongForUserForAPIContract 
    StatusCode int64 
    
}

