package operations

import (
	"openapi/pkg/models/shared"
)

type AlbumAPIGetOnePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type AlbumAPIGetOneFieldsEnum string

const (
	AlbumAPIGetOneFieldsEnumNone            AlbumAPIGetOneFieldsEnum = "None"
	AlbumAPIGetOneFieldsEnumAdditionalNames AlbumAPIGetOneFieldsEnum = "AdditionalNames"
	AlbumAPIGetOneFieldsEnumArtists         AlbumAPIGetOneFieldsEnum = "Artists"
	AlbumAPIGetOneFieldsEnumDescription     AlbumAPIGetOneFieldsEnum = "Description"
	AlbumAPIGetOneFieldsEnumDiscs           AlbumAPIGetOneFieldsEnum = "Discs"
	AlbumAPIGetOneFieldsEnumIdentifiers     AlbumAPIGetOneFieldsEnum = "Identifiers"
	AlbumAPIGetOneFieldsEnumMainPicture     AlbumAPIGetOneFieldsEnum = "MainPicture"
	AlbumAPIGetOneFieldsEnumNames           AlbumAPIGetOneFieldsEnum = "Names"
	AlbumAPIGetOneFieldsEnumPVs             AlbumAPIGetOneFieldsEnum = "PVs"
	AlbumAPIGetOneFieldsEnumReleaseEvent    AlbumAPIGetOneFieldsEnum = "ReleaseEvent"
	AlbumAPIGetOneFieldsEnumTags            AlbumAPIGetOneFieldsEnum = "Tags"
	AlbumAPIGetOneFieldsEnumTracks          AlbumAPIGetOneFieldsEnum = "Tracks"
	AlbumAPIGetOneFieldsEnumWebLinks        AlbumAPIGetOneFieldsEnum = "WebLinks"
)

type AlbumAPIGetOneLangEnum string

const (
	AlbumAPIGetOneLangEnumDefault  AlbumAPIGetOneLangEnum = "Default"
	AlbumAPIGetOneLangEnumJapanese AlbumAPIGetOneLangEnum = "Japanese"
	AlbumAPIGetOneLangEnumRomaji   AlbumAPIGetOneLangEnum = "Romaji"
	AlbumAPIGetOneLangEnumEnglish  AlbumAPIGetOneLangEnum = "English"
)

type AlbumAPIGetOneSongFieldsEnum string

const (
	AlbumAPIGetOneSongFieldsEnumNone            AlbumAPIGetOneSongFieldsEnum = "None"
	AlbumAPIGetOneSongFieldsEnumAdditionalNames AlbumAPIGetOneSongFieldsEnum = "AdditionalNames"
	AlbumAPIGetOneSongFieldsEnumAlbums          AlbumAPIGetOneSongFieldsEnum = "Albums"
	AlbumAPIGetOneSongFieldsEnumArtists         AlbumAPIGetOneSongFieldsEnum = "Artists"
	AlbumAPIGetOneSongFieldsEnumLyrics          AlbumAPIGetOneSongFieldsEnum = "Lyrics"
	AlbumAPIGetOneSongFieldsEnumMainPicture     AlbumAPIGetOneSongFieldsEnum = "MainPicture"
	AlbumAPIGetOneSongFieldsEnumNames           AlbumAPIGetOneSongFieldsEnum = "Names"
	AlbumAPIGetOneSongFieldsEnumPVs             AlbumAPIGetOneSongFieldsEnum = "PVs"
	AlbumAPIGetOneSongFieldsEnumReleaseEvent    AlbumAPIGetOneSongFieldsEnum = "ReleaseEvent"
	AlbumAPIGetOneSongFieldsEnumTags            AlbumAPIGetOneSongFieldsEnum = "Tags"
	AlbumAPIGetOneSongFieldsEnumThumbURL        AlbumAPIGetOneSongFieldsEnum = "ThumbUrl"
	AlbumAPIGetOneSongFieldsEnumWebLinks        AlbumAPIGetOneSongFieldsEnum = "WebLinks"
)

type AlbumAPIGetOneQueryParams struct {
	Fields     *AlbumAPIGetOneFieldsEnum     `queryParam:"style=form,explode=true,name=fields"`
	Lang       *AlbumAPIGetOneLangEnum       `queryParam:"style=form,explode=true,name=lang"`
	SongFields *AlbumAPIGetOneSongFieldsEnum `queryParam:"style=form,explode=true,name=songFields"`
}

type AlbumAPIGetOneRequest struct {
	PathParams  AlbumAPIGetOnePathParams
	QueryParams AlbumAPIGetOneQueryParams
}

type AlbumAPIGetOneResponse struct {
	AlbumForAPIContract *shared.AlbumForAPIContract
	Body                []byte
	ContentType         string
	StatusCode          int64
}
