package operations

import (
	"openapi/pkg/models/shared"
)

type ReleaseEventSeriesAPIGetOnePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type ReleaseEventSeriesAPIGetOneFieldsEnum string

const (
	ReleaseEventSeriesAPIGetOneFieldsEnumNone            ReleaseEventSeriesAPIGetOneFieldsEnum = "None"
	ReleaseEventSeriesAPIGetOneFieldsEnumAdditionalNames ReleaseEventSeriesAPIGetOneFieldsEnum = "AdditionalNames"
	ReleaseEventSeriesAPIGetOneFieldsEnumDescription     ReleaseEventSeriesAPIGetOneFieldsEnum = "Description"
	ReleaseEventSeriesAPIGetOneFieldsEnumEvents          ReleaseEventSeriesAPIGetOneFieldsEnum = "Events"
	ReleaseEventSeriesAPIGetOneFieldsEnumMainPicture     ReleaseEventSeriesAPIGetOneFieldsEnum = "MainPicture"
	ReleaseEventSeriesAPIGetOneFieldsEnumNames           ReleaseEventSeriesAPIGetOneFieldsEnum = "Names"
	ReleaseEventSeriesAPIGetOneFieldsEnumWebLinks        ReleaseEventSeriesAPIGetOneFieldsEnum = "WebLinks"
)

type ReleaseEventSeriesAPIGetOneLangEnum string

const (
	ReleaseEventSeriesAPIGetOneLangEnumDefault  ReleaseEventSeriesAPIGetOneLangEnum = "Default"
	ReleaseEventSeriesAPIGetOneLangEnumJapanese ReleaseEventSeriesAPIGetOneLangEnum = "Japanese"
	ReleaseEventSeriesAPIGetOneLangEnumRomaji   ReleaseEventSeriesAPIGetOneLangEnum = "Romaji"
	ReleaseEventSeriesAPIGetOneLangEnumEnglish  ReleaseEventSeriesAPIGetOneLangEnum = "English"
)

type ReleaseEventSeriesAPIGetOneQueryParams struct {
	Fields *ReleaseEventSeriesAPIGetOneFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Lang   *ReleaseEventSeriesAPIGetOneLangEnum   `queryParam:"style=form,explode=true,name=lang"`
}

type ReleaseEventSeriesAPIGetOneRequest struct {
	PathParams  ReleaseEventSeriesAPIGetOnePathParams
	QueryParams ReleaseEventSeriesAPIGetOneQueryParams
}

type ReleaseEventSeriesAPIGetOneResponse struct {
	Body                             []byte
	ContentType                      string
	ReleaseEventSeriesForAPIContract *shared.ReleaseEventSeriesForAPIContract
	StatusCode                       int64
}
