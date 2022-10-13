package operations

import (
	"openapi/pkg/models/shared"
)

type ReleaseEventAPIGetOnePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type ReleaseEventAPIGetOneFieldsEnum string

const (
	ReleaseEventAPIGetOneFieldsEnumNone            ReleaseEventAPIGetOneFieldsEnum = "None"
	ReleaseEventAPIGetOneFieldsEnumAdditionalNames ReleaseEventAPIGetOneFieldsEnum = "AdditionalNames"
	ReleaseEventAPIGetOneFieldsEnumArtists         ReleaseEventAPIGetOneFieldsEnum = "Artists"
	ReleaseEventAPIGetOneFieldsEnumDescription     ReleaseEventAPIGetOneFieldsEnum = "Description"
	ReleaseEventAPIGetOneFieldsEnumMainPicture     ReleaseEventAPIGetOneFieldsEnum = "MainPicture"
	ReleaseEventAPIGetOneFieldsEnumNames           ReleaseEventAPIGetOneFieldsEnum = "Names"
	ReleaseEventAPIGetOneFieldsEnumSeries          ReleaseEventAPIGetOneFieldsEnum = "Series"
	ReleaseEventAPIGetOneFieldsEnumSongList        ReleaseEventAPIGetOneFieldsEnum = "SongList"
	ReleaseEventAPIGetOneFieldsEnumTags            ReleaseEventAPIGetOneFieldsEnum = "Tags"
	ReleaseEventAPIGetOneFieldsEnumVenue           ReleaseEventAPIGetOneFieldsEnum = "Venue"
	ReleaseEventAPIGetOneFieldsEnumWebLinks        ReleaseEventAPIGetOneFieldsEnum = "WebLinks"
)

type ReleaseEventAPIGetOneLangEnum string

const (
	ReleaseEventAPIGetOneLangEnumDefault  ReleaseEventAPIGetOneLangEnum = "Default"
	ReleaseEventAPIGetOneLangEnumJapanese ReleaseEventAPIGetOneLangEnum = "Japanese"
	ReleaseEventAPIGetOneLangEnumRomaji   ReleaseEventAPIGetOneLangEnum = "Romaji"
	ReleaseEventAPIGetOneLangEnumEnglish  ReleaseEventAPIGetOneLangEnum = "English"
)

type ReleaseEventAPIGetOneQueryParams struct {
	Fields *ReleaseEventAPIGetOneFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Lang   *ReleaseEventAPIGetOneLangEnum   `queryParam:"style=form,explode=true,name=lang"`
}

type ReleaseEventAPIGetOneRequest struct {
	PathParams  ReleaseEventAPIGetOnePathParams
	QueryParams ReleaseEventAPIGetOneQueryParams
}

type ReleaseEventAPIGetOneResponse struct {
	Body                       []byte
	ContentType                string
	ReleaseEventForAPIContract *shared.ReleaseEventForAPIContract
	StatusCode                 int64
}
