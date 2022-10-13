package operations

import (
	"openapi/pkg/models/shared"
)

type ReleaseEventSeriesAPIGetListFieldsEnum string

const (
	ReleaseEventSeriesAPIGetListFieldsEnumNone            ReleaseEventSeriesAPIGetListFieldsEnum = "None"
	ReleaseEventSeriesAPIGetListFieldsEnumAdditionalNames ReleaseEventSeriesAPIGetListFieldsEnum = "AdditionalNames"
	ReleaseEventSeriesAPIGetListFieldsEnumDescription     ReleaseEventSeriesAPIGetListFieldsEnum = "Description"
	ReleaseEventSeriesAPIGetListFieldsEnumEvents          ReleaseEventSeriesAPIGetListFieldsEnum = "Events"
	ReleaseEventSeriesAPIGetListFieldsEnumMainPicture     ReleaseEventSeriesAPIGetListFieldsEnum = "MainPicture"
	ReleaseEventSeriesAPIGetListFieldsEnumNames           ReleaseEventSeriesAPIGetListFieldsEnum = "Names"
	ReleaseEventSeriesAPIGetListFieldsEnumWebLinks        ReleaseEventSeriesAPIGetListFieldsEnum = "WebLinks"
)

type ReleaseEventSeriesAPIGetListLangEnum string

const (
	ReleaseEventSeriesAPIGetListLangEnumDefault  ReleaseEventSeriesAPIGetListLangEnum = "Default"
	ReleaseEventSeriesAPIGetListLangEnumJapanese ReleaseEventSeriesAPIGetListLangEnum = "Japanese"
	ReleaseEventSeriesAPIGetListLangEnumRomaji   ReleaseEventSeriesAPIGetListLangEnum = "Romaji"
	ReleaseEventSeriesAPIGetListLangEnumEnglish  ReleaseEventSeriesAPIGetListLangEnum = "English"
)

type ReleaseEventSeriesAPIGetListNameMatchModeEnum string

const (
	ReleaseEventSeriesAPIGetListNameMatchModeEnumAuto       ReleaseEventSeriesAPIGetListNameMatchModeEnum = "Auto"
	ReleaseEventSeriesAPIGetListNameMatchModeEnumPartial    ReleaseEventSeriesAPIGetListNameMatchModeEnum = "Partial"
	ReleaseEventSeriesAPIGetListNameMatchModeEnumStartsWith ReleaseEventSeriesAPIGetListNameMatchModeEnum = "StartsWith"
	ReleaseEventSeriesAPIGetListNameMatchModeEnumExact      ReleaseEventSeriesAPIGetListNameMatchModeEnum = "Exact"
	ReleaseEventSeriesAPIGetListNameMatchModeEnumWords      ReleaseEventSeriesAPIGetListNameMatchModeEnum = "Words"
)

type ReleaseEventSeriesAPIGetListQueryParams struct {
	Fields        *ReleaseEventSeriesAPIGetListFieldsEnum        `queryParam:"style=form,explode=true,name=fields"`
	GetTotalCount *bool                                          `queryParam:"style=form,explode=true,name=getTotalCount"`
	Lang          *ReleaseEventSeriesAPIGetListLangEnum          `queryParam:"style=form,explode=true,name=lang"`
	MaxResults    *int32                                         `queryParam:"style=form,explode=true,name=maxResults"`
	NameMatchMode *ReleaseEventSeriesAPIGetListNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
	Query         *string                                        `queryParam:"style=form,explode=true,name=query"`
	Start         *int32                                         `queryParam:"style=form,explode=true,name=start"`
}

type ReleaseEventSeriesAPIGetListRequest struct {
	QueryParams ReleaseEventSeriesAPIGetListQueryParams
}

type ReleaseEventSeriesAPIGetListResponse struct {
	Body                                              []byte
	ContentType                                       string
	PartialFindResultReleaseEventSeriesForAPIContract *shared.PartialFindResultReleaseEventSeriesForAPIContract
	StatusCode                                        int64
}
