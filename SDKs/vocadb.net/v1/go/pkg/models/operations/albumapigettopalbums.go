package operations

import (
	"openapi/pkg/models/shared"
)

type AlbumAPIGetTopAlbumsFieldsEnum string

const (
	AlbumAPIGetTopAlbumsFieldsEnumNone            AlbumAPIGetTopAlbumsFieldsEnum = "None"
	AlbumAPIGetTopAlbumsFieldsEnumAdditionalNames AlbumAPIGetTopAlbumsFieldsEnum = "AdditionalNames"
	AlbumAPIGetTopAlbumsFieldsEnumArtists         AlbumAPIGetTopAlbumsFieldsEnum = "Artists"
	AlbumAPIGetTopAlbumsFieldsEnumDescription     AlbumAPIGetTopAlbumsFieldsEnum = "Description"
	AlbumAPIGetTopAlbumsFieldsEnumDiscs           AlbumAPIGetTopAlbumsFieldsEnum = "Discs"
	AlbumAPIGetTopAlbumsFieldsEnumIdentifiers     AlbumAPIGetTopAlbumsFieldsEnum = "Identifiers"
	AlbumAPIGetTopAlbumsFieldsEnumMainPicture     AlbumAPIGetTopAlbumsFieldsEnum = "MainPicture"
	AlbumAPIGetTopAlbumsFieldsEnumNames           AlbumAPIGetTopAlbumsFieldsEnum = "Names"
	AlbumAPIGetTopAlbumsFieldsEnumPVs             AlbumAPIGetTopAlbumsFieldsEnum = "PVs"
	AlbumAPIGetTopAlbumsFieldsEnumReleaseEvent    AlbumAPIGetTopAlbumsFieldsEnum = "ReleaseEvent"
	AlbumAPIGetTopAlbumsFieldsEnumTags            AlbumAPIGetTopAlbumsFieldsEnum = "Tags"
	AlbumAPIGetTopAlbumsFieldsEnumTracks          AlbumAPIGetTopAlbumsFieldsEnum = "Tracks"
	AlbumAPIGetTopAlbumsFieldsEnumWebLinks        AlbumAPIGetTopAlbumsFieldsEnum = "WebLinks"
)

type AlbumAPIGetTopAlbumsLanguagePreferenceEnum string

const (
	AlbumAPIGetTopAlbumsLanguagePreferenceEnumDefault  AlbumAPIGetTopAlbumsLanguagePreferenceEnum = "Default"
	AlbumAPIGetTopAlbumsLanguagePreferenceEnumJapanese AlbumAPIGetTopAlbumsLanguagePreferenceEnum = "Japanese"
	AlbumAPIGetTopAlbumsLanguagePreferenceEnumRomaji   AlbumAPIGetTopAlbumsLanguagePreferenceEnum = "Romaji"
	AlbumAPIGetTopAlbumsLanguagePreferenceEnumEnglish  AlbumAPIGetTopAlbumsLanguagePreferenceEnum = "English"
)

type AlbumAPIGetTopAlbumsQueryParams struct {
	Fields             *AlbumAPIGetTopAlbumsFieldsEnum             `queryParam:"style=form,explode=true,name=fields"`
	IgnoreIds          []int32                                     `queryParam:"style=form,explode=true,name=ignoreIds"`
	LanguagePreference *AlbumAPIGetTopAlbumsLanguagePreferenceEnum `queryParam:"style=form,explode=true,name=languagePreference"`
}

type AlbumAPIGetTopAlbumsRequest struct {
	QueryParams AlbumAPIGetTopAlbumsQueryParams
}

type AlbumAPIGetTopAlbumsResponse struct {
	AlbumForAPIContracts []shared.AlbumForAPIContract
	Body                 []byte
	ContentType          string
	StatusCode           int64
}
