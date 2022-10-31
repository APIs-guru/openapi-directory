package operations

import (
	"openapi/pkg/models/shared"
)

type SongAPIGetByPvFieldsEnum string

const (
	SongAPIGetByPvFieldsEnumNone            SongAPIGetByPvFieldsEnum = "None"
	SongAPIGetByPvFieldsEnumAdditionalNames SongAPIGetByPvFieldsEnum = "AdditionalNames"
	SongAPIGetByPvFieldsEnumAlbums          SongAPIGetByPvFieldsEnum = "Albums"
	SongAPIGetByPvFieldsEnumArtists         SongAPIGetByPvFieldsEnum = "Artists"
	SongAPIGetByPvFieldsEnumLyrics          SongAPIGetByPvFieldsEnum = "Lyrics"
	SongAPIGetByPvFieldsEnumMainPicture     SongAPIGetByPvFieldsEnum = "MainPicture"
	SongAPIGetByPvFieldsEnumNames           SongAPIGetByPvFieldsEnum = "Names"
	SongAPIGetByPvFieldsEnumPVs             SongAPIGetByPvFieldsEnum = "PVs"
	SongAPIGetByPvFieldsEnumReleaseEvent    SongAPIGetByPvFieldsEnum = "ReleaseEvent"
	SongAPIGetByPvFieldsEnumTags            SongAPIGetByPvFieldsEnum = "Tags"
	SongAPIGetByPvFieldsEnumThumbURL        SongAPIGetByPvFieldsEnum = "ThumbUrl"
	SongAPIGetByPvFieldsEnumWebLinks        SongAPIGetByPvFieldsEnum = "WebLinks"
)

type SongAPIGetByPvLangEnum string

const (
	SongAPIGetByPvLangEnumDefault  SongAPIGetByPvLangEnum = "Default"
	SongAPIGetByPvLangEnumJapanese SongAPIGetByPvLangEnum = "Japanese"
	SongAPIGetByPvLangEnumRomaji   SongAPIGetByPvLangEnum = "Romaji"
	SongAPIGetByPvLangEnumEnglish  SongAPIGetByPvLangEnum = "English"
)

type SongAPIGetByPvPvServiceEnum string

const (
	SongAPIGetByPvPvServiceEnumNicoNicoDouga SongAPIGetByPvPvServiceEnum = "NicoNicoDouga"
	SongAPIGetByPvPvServiceEnumYoutube       SongAPIGetByPvPvServiceEnum = "Youtube"
	SongAPIGetByPvPvServiceEnumSoundCloud    SongAPIGetByPvPvServiceEnum = "SoundCloud"
	SongAPIGetByPvPvServiceEnumVimeo         SongAPIGetByPvPvServiceEnum = "Vimeo"
	SongAPIGetByPvPvServiceEnumPiapro        SongAPIGetByPvPvServiceEnum = "Piapro"
	SongAPIGetByPvPvServiceEnumBilibili      SongAPIGetByPvPvServiceEnum = "Bilibili"
	SongAPIGetByPvPvServiceEnumFile          SongAPIGetByPvPvServiceEnum = "File"
	SongAPIGetByPvPvServiceEnumLocalFile     SongAPIGetByPvPvServiceEnum = "LocalFile"
	SongAPIGetByPvPvServiceEnumCreofuga      SongAPIGetByPvPvServiceEnum = "Creofuga"
	SongAPIGetByPvPvServiceEnumBandcamp      SongAPIGetByPvPvServiceEnum = "Bandcamp"
)

type SongAPIGetByPvQueryParams struct {
	Fields    *SongAPIGetByPvFieldsEnum   `queryParam:"style=form,explode=true,name=fields"`
	Lang      *SongAPIGetByPvLangEnum     `queryParam:"style=form,explode=true,name=lang"`
	PvID      string                      `queryParam:"style=form,explode=true,name=pvId"`
	PvService SongAPIGetByPvPvServiceEnum `queryParam:"style=form,explode=true,name=pvService"`
}

type SongAPIGetByPvRequest struct {
	QueryParams SongAPIGetByPvQueryParams
}

type SongAPIGetByPvResponse struct {
	Body               []byte
	ContentType        string
	SongForAPIContract *shared.SongForAPIContract
	StatusCode         int64
}
