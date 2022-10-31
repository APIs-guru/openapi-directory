package operations

import (
	"openapi/pkg/models/shared"
)

type ReleaseEventAPIGetPublishedSongsPathParams struct {
	EventID int32 `pathParam:"style=simple,explode=false,name=eventId"`
}

type ReleaseEventAPIGetPublishedSongsFieldsEnum string

const (
	ReleaseEventAPIGetPublishedSongsFieldsEnumNone            ReleaseEventAPIGetPublishedSongsFieldsEnum = "None"
	ReleaseEventAPIGetPublishedSongsFieldsEnumAdditionalNames ReleaseEventAPIGetPublishedSongsFieldsEnum = "AdditionalNames"
	ReleaseEventAPIGetPublishedSongsFieldsEnumAlbums          ReleaseEventAPIGetPublishedSongsFieldsEnum = "Albums"
	ReleaseEventAPIGetPublishedSongsFieldsEnumArtists         ReleaseEventAPIGetPublishedSongsFieldsEnum = "Artists"
	ReleaseEventAPIGetPublishedSongsFieldsEnumLyrics          ReleaseEventAPIGetPublishedSongsFieldsEnum = "Lyrics"
	ReleaseEventAPIGetPublishedSongsFieldsEnumMainPicture     ReleaseEventAPIGetPublishedSongsFieldsEnum = "MainPicture"
	ReleaseEventAPIGetPublishedSongsFieldsEnumNames           ReleaseEventAPIGetPublishedSongsFieldsEnum = "Names"
	ReleaseEventAPIGetPublishedSongsFieldsEnumPVs             ReleaseEventAPIGetPublishedSongsFieldsEnum = "PVs"
	ReleaseEventAPIGetPublishedSongsFieldsEnumReleaseEvent    ReleaseEventAPIGetPublishedSongsFieldsEnum = "ReleaseEvent"
	ReleaseEventAPIGetPublishedSongsFieldsEnumTags            ReleaseEventAPIGetPublishedSongsFieldsEnum = "Tags"
	ReleaseEventAPIGetPublishedSongsFieldsEnumThumbURL        ReleaseEventAPIGetPublishedSongsFieldsEnum = "ThumbUrl"
	ReleaseEventAPIGetPublishedSongsFieldsEnumWebLinks        ReleaseEventAPIGetPublishedSongsFieldsEnum = "WebLinks"
)

type ReleaseEventAPIGetPublishedSongsLangEnum string

const (
	ReleaseEventAPIGetPublishedSongsLangEnumDefault  ReleaseEventAPIGetPublishedSongsLangEnum = "Default"
	ReleaseEventAPIGetPublishedSongsLangEnumJapanese ReleaseEventAPIGetPublishedSongsLangEnum = "Japanese"
	ReleaseEventAPIGetPublishedSongsLangEnumRomaji   ReleaseEventAPIGetPublishedSongsLangEnum = "Romaji"
	ReleaseEventAPIGetPublishedSongsLangEnumEnglish  ReleaseEventAPIGetPublishedSongsLangEnum = "English"
)

type ReleaseEventAPIGetPublishedSongsQueryParams struct {
	Fields *ReleaseEventAPIGetPublishedSongsFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Lang   *ReleaseEventAPIGetPublishedSongsLangEnum   `queryParam:"style=form,explode=true,name=lang"`
}

type ReleaseEventAPIGetPublishedSongsRequest struct {
	PathParams  ReleaseEventAPIGetPublishedSongsPathParams
	QueryParams ReleaseEventAPIGetPublishedSongsQueryParams
}

type ReleaseEventAPIGetPublishedSongsResponse struct {
	Body                []byte
	ContentType         string
	SongForAPIContracts []shared.SongForAPIContract
	StatusCode          int64
}
