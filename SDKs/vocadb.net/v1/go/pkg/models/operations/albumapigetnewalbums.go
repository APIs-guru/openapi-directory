package operations

import (
	"openapi/pkg/models/shared"
)

type AlbumAPIGetNewAlbumsFieldsEnum string

const (
	AlbumAPIGetNewAlbumsFieldsEnumNone            AlbumAPIGetNewAlbumsFieldsEnum = "None"
	AlbumAPIGetNewAlbumsFieldsEnumAdditionalNames AlbumAPIGetNewAlbumsFieldsEnum = "AdditionalNames"
	AlbumAPIGetNewAlbumsFieldsEnumArtists         AlbumAPIGetNewAlbumsFieldsEnum = "Artists"
	AlbumAPIGetNewAlbumsFieldsEnumDescription     AlbumAPIGetNewAlbumsFieldsEnum = "Description"
	AlbumAPIGetNewAlbumsFieldsEnumDiscs           AlbumAPIGetNewAlbumsFieldsEnum = "Discs"
	AlbumAPIGetNewAlbumsFieldsEnumIdentifiers     AlbumAPIGetNewAlbumsFieldsEnum = "Identifiers"
	AlbumAPIGetNewAlbumsFieldsEnumMainPicture     AlbumAPIGetNewAlbumsFieldsEnum = "MainPicture"
	AlbumAPIGetNewAlbumsFieldsEnumNames           AlbumAPIGetNewAlbumsFieldsEnum = "Names"
	AlbumAPIGetNewAlbumsFieldsEnumPVs             AlbumAPIGetNewAlbumsFieldsEnum = "PVs"
	AlbumAPIGetNewAlbumsFieldsEnumReleaseEvent    AlbumAPIGetNewAlbumsFieldsEnum = "ReleaseEvent"
	AlbumAPIGetNewAlbumsFieldsEnumTags            AlbumAPIGetNewAlbumsFieldsEnum = "Tags"
	AlbumAPIGetNewAlbumsFieldsEnumTracks          AlbumAPIGetNewAlbumsFieldsEnum = "Tracks"
	AlbumAPIGetNewAlbumsFieldsEnumWebLinks        AlbumAPIGetNewAlbumsFieldsEnum = "WebLinks"
)

type AlbumAPIGetNewAlbumsLanguagePreferenceEnum string

const (
	AlbumAPIGetNewAlbumsLanguagePreferenceEnumDefault  AlbumAPIGetNewAlbumsLanguagePreferenceEnum = "Default"
	AlbumAPIGetNewAlbumsLanguagePreferenceEnumJapanese AlbumAPIGetNewAlbumsLanguagePreferenceEnum = "Japanese"
	AlbumAPIGetNewAlbumsLanguagePreferenceEnumRomaji   AlbumAPIGetNewAlbumsLanguagePreferenceEnum = "Romaji"
	AlbumAPIGetNewAlbumsLanguagePreferenceEnumEnglish  AlbumAPIGetNewAlbumsLanguagePreferenceEnum = "English"
)

type AlbumAPIGetNewAlbumsQueryParams struct {
	Fields             *AlbumAPIGetNewAlbumsFieldsEnum             `queryParam:"style=form,explode=true,name=fields"`
	LanguagePreference *AlbumAPIGetNewAlbumsLanguagePreferenceEnum `queryParam:"style=form,explode=true,name=languagePreference"`
}

type AlbumAPIGetNewAlbumsRequest struct {
	QueryParams AlbumAPIGetNewAlbumsQueryParams
}

type AlbumAPIGetNewAlbumsResponse struct {
	AlbumForAPIContracts []shared.AlbumForAPIContract
	Body                 []byte
	ContentType          string
	StatusCode           int64
}
