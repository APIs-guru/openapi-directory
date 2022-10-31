package operations

import (
	"openapi/pkg/models/shared"
)

type AlbumAPIGetTracksPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type AlbumAPIGetTracksFieldsEnum string

const (
	AlbumAPIGetTracksFieldsEnumNone            AlbumAPIGetTracksFieldsEnum = "None"
	AlbumAPIGetTracksFieldsEnumAdditionalNames AlbumAPIGetTracksFieldsEnum = "AdditionalNames"
	AlbumAPIGetTracksFieldsEnumAlbums          AlbumAPIGetTracksFieldsEnum = "Albums"
	AlbumAPIGetTracksFieldsEnumArtists         AlbumAPIGetTracksFieldsEnum = "Artists"
	AlbumAPIGetTracksFieldsEnumLyrics          AlbumAPIGetTracksFieldsEnum = "Lyrics"
	AlbumAPIGetTracksFieldsEnumMainPicture     AlbumAPIGetTracksFieldsEnum = "MainPicture"
	AlbumAPIGetTracksFieldsEnumNames           AlbumAPIGetTracksFieldsEnum = "Names"
	AlbumAPIGetTracksFieldsEnumPVs             AlbumAPIGetTracksFieldsEnum = "PVs"
	AlbumAPIGetTracksFieldsEnumReleaseEvent    AlbumAPIGetTracksFieldsEnum = "ReleaseEvent"
	AlbumAPIGetTracksFieldsEnumTags            AlbumAPIGetTracksFieldsEnum = "Tags"
	AlbumAPIGetTracksFieldsEnumThumbURL        AlbumAPIGetTracksFieldsEnum = "ThumbUrl"
	AlbumAPIGetTracksFieldsEnumWebLinks        AlbumAPIGetTracksFieldsEnum = "WebLinks"
)

type AlbumAPIGetTracksLangEnum string

const (
	AlbumAPIGetTracksLangEnumDefault  AlbumAPIGetTracksLangEnum = "Default"
	AlbumAPIGetTracksLangEnumJapanese AlbumAPIGetTracksLangEnum = "Japanese"
	AlbumAPIGetTracksLangEnumRomaji   AlbumAPIGetTracksLangEnum = "Romaji"
	AlbumAPIGetTracksLangEnumEnglish  AlbumAPIGetTracksLangEnum = "English"
)

type AlbumAPIGetTracksQueryParams struct {
	Fields *AlbumAPIGetTracksFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Lang   *AlbumAPIGetTracksLangEnum   `queryParam:"style=form,explode=true,name=lang"`
}

type AlbumAPIGetTracksRequest struct {
	PathParams  AlbumAPIGetTracksPathParams
	QueryParams AlbumAPIGetTracksQueryParams
}

type AlbumAPIGetTracksResponse struct {
	Body                       []byte
	ContentType                string
	SongInAlbumForAPIContracts []shared.SongInAlbumForAPIContract
	StatusCode                 int64
}
