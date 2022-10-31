package operations

import (
	"openapi/pkg/models/shared"
)

type SongListAPIGetSongsPathParams struct {
	ListID int32 `pathParam:"style=simple,explode=false,name=listId"`
}

type SongListAPIGetSongsFieldsEnum string

const (
	SongListAPIGetSongsFieldsEnumNone            SongListAPIGetSongsFieldsEnum = "None"
	SongListAPIGetSongsFieldsEnumAdditionalNames SongListAPIGetSongsFieldsEnum = "AdditionalNames"
	SongListAPIGetSongsFieldsEnumAlbums          SongListAPIGetSongsFieldsEnum = "Albums"
	SongListAPIGetSongsFieldsEnumArtists         SongListAPIGetSongsFieldsEnum = "Artists"
	SongListAPIGetSongsFieldsEnumLyrics          SongListAPIGetSongsFieldsEnum = "Lyrics"
	SongListAPIGetSongsFieldsEnumMainPicture     SongListAPIGetSongsFieldsEnum = "MainPicture"
	SongListAPIGetSongsFieldsEnumNames           SongListAPIGetSongsFieldsEnum = "Names"
	SongListAPIGetSongsFieldsEnumPVs             SongListAPIGetSongsFieldsEnum = "PVs"
	SongListAPIGetSongsFieldsEnumReleaseEvent    SongListAPIGetSongsFieldsEnum = "ReleaseEvent"
	SongListAPIGetSongsFieldsEnumTags            SongListAPIGetSongsFieldsEnum = "Tags"
	SongListAPIGetSongsFieldsEnumThumbURL        SongListAPIGetSongsFieldsEnum = "ThumbUrl"
	SongListAPIGetSongsFieldsEnumWebLinks        SongListAPIGetSongsFieldsEnum = "WebLinks"
)

type SongListAPIGetSongsLangEnum string

const (
	SongListAPIGetSongsLangEnumDefault  SongListAPIGetSongsLangEnum = "Default"
	SongListAPIGetSongsLangEnumJapanese SongListAPIGetSongsLangEnum = "Japanese"
	SongListAPIGetSongsLangEnumRomaji   SongListAPIGetSongsLangEnum = "Romaji"
	SongListAPIGetSongsLangEnumEnglish  SongListAPIGetSongsLangEnum = "English"
)

type SongListAPIGetSongsNameMatchModeEnum string

const (
	SongListAPIGetSongsNameMatchModeEnumAuto       SongListAPIGetSongsNameMatchModeEnum = "Auto"
	SongListAPIGetSongsNameMatchModeEnumPartial    SongListAPIGetSongsNameMatchModeEnum = "Partial"
	SongListAPIGetSongsNameMatchModeEnumStartsWith SongListAPIGetSongsNameMatchModeEnum = "StartsWith"
	SongListAPIGetSongsNameMatchModeEnumExact      SongListAPIGetSongsNameMatchModeEnum = "Exact"
	SongListAPIGetSongsNameMatchModeEnumWords      SongListAPIGetSongsNameMatchModeEnum = "Words"
)

type SongListAPIGetSongsPvServicesEnum string

const (
	SongListAPIGetSongsPvServicesEnumNothing       SongListAPIGetSongsPvServicesEnum = "Nothing"
	SongListAPIGetSongsPvServicesEnumNicoNicoDouga SongListAPIGetSongsPvServicesEnum = "NicoNicoDouga"
	SongListAPIGetSongsPvServicesEnumYoutube       SongListAPIGetSongsPvServicesEnum = "Youtube"
	SongListAPIGetSongsPvServicesEnumSoundCloud    SongListAPIGetSongsPvServicesEnum = "SoundCloud"
	SongListAPIGetSongsPvServicesEnumVimeo         SongListAPIGetSongsPvServicesEnum = "Vimeo"
	SongListAPIGetSongsPvServicesEnumPiapro        SongListAPIGetSongsPvServicesEnum = "Piapro"
	SongListAPIGetSongsPvServicesEnumBilibili      SongListAPIGetSongsPvServicesEnum = "Bilibili"
	SongListAPIGetSongsPvServicesEnumFile          SongListAPIGetSongsPvServicesEnum = "File"
	SongListAPIGetSongsPvServicesEnumLocalFile     SongListAPIGetSongsPvServicesEnum = "LocalFile"
	SongListAPIGetSongsPvServicesEnumCreofuga      SongListAPIGetSongsPvServicesEnum = "Creofuga"
	SongListAPIGetSongsPvServicesEnumBandcamp      SongListAPIGetSongsPvServicesEnum = "Bandcamp"
)

type SongListAPIGetSongsSortEnum string

const (
	SongListAPIGetSongsSortEnumNone           SongListAPIGetSongsSortEnum = "None"
	SongListAPIGetSongsSortEnumName           SongListAPIGetSongsSortEnum = "Name"
	SongListAPIGetSongsSortEnumAdditionDate   SongListAPIGetSongsSortEnum = "AdditionDate"
	SongListAPIGetSongsSortEnumPublishDate    SongListAPIGetSongsSortEnum = "PublishDate"
	SongListAPIGetSongsSortEnumFavoritedTimes SongListAPIGetSongsSortEnum = "FavoritedTimes"
	SongListAPIGetSongsSortEnumRatingScore    SongListAPIGetSongsSortEnum = "RatingScore"
	SongListAPIGetSongsSortEnumTagUsageCount  SongListAPIGetSongsSortEnum = "TagUsageCount"
)

type SongListAPIGetSongsQueryParams struct {
	AdvancedFilters []interface{}                         `queryParam:"style=form,explode=true,name=advancedFilters"`
	ArtistID        []int32                               `queryParam:"style=form,explode=true,name=artistId"`
	ChildVoicebanks *bool                                 `queryParam:"style=form,explode=true,name=childVoicebanks"`
	Fields          *SongListAPIGetSongsFieldsEnum        `queryParam:"style=form,explode=true,name=fields"`
	GetTotalCount   *bool                                 `queryParam:"style=form,explode=true,name=getTotalCount"`
	Lang            *SongListAPIGetSongsLangEnum          `queryParam:"style=form,explode=true,name=lang"`
	MaxResults      *int32                                `queryParam:"style=form,explode=true,name=maxResults"`
	NameMatchMode   *SongListAPIGetSongsNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
	PvServices      *SongListAPIGetSongsPvServicesEnum    `queryParam:"style=form,explode=true,name=pvServices"`
	Query           *string                               `queryParam:"style=form,explode=true,name=query"`
	SongTypes       *string                               `queryParam:"style=form,explode=true,name=songTypes"`
	Sort            *SongListAPIGetSongsSortEnum          `queryParam:"style=form,explode=true,name=sort"`
	Start           *int32                                `queryParam:"style=form,explode=true,name=start"`
	TagID           []int32                               `queryParam:"style=form,explode=true,name=tagId"`
}

type SongListAPIGetSongsRequest struct {
	PathParams  SongListAPIGetSongsPathParams
	QueryParams SongListAPIGetSongsQueryParams
}

type SongListAPIGetSongsResponse struct {
	Body                                      []byte
	ContentType                               string
	PartialFindResultSongInListForAPIContract *shared.PartialFindResultSongInListForAPIContract
	StatusCode                                int64
}
