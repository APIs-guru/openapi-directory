package operations

import (
	"openapi/pkg/models/shared"
)

type TagAPIGetByNamePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type TagAPIGetByNameFieldsEnum string

const (
	TagAPIGetByNameFieldsEnumNone                  TagAPIGetByNameFieldsEnum = "None"
	TagAPIGetByNameFieldsEnumAdditionalNames       TagAPIGetByNameFieldsEnum = "AdditionalNames"
	TagAPIGetByNameFieldsEnumAliasedTo             TagAPIGetByNameFieldsEnum = "AliasedTo"
	TagAPIGetByNameFieldsEnumDescription           TagAPIGetByNameFieldsEnum = "Description"
	TagAPIGetByNameFieldsEnumMainPicture           TagAPIGetByNameFieldsEnum = "MainPicture"
	TagAPIGetByNameFieldsEnumNames                 TagAPIGetByNameFieldsEnum = "Names"
	TagAPIGetByNameFieldsEnumParent                TagAPIGetByNameFieldsEnum = "Parent"
	TagAPIGetByNameFieldsEnumRelatedTags           TagAPIGetByNameFieldsEnum = "RelatedTags"
	TagAPIGetByNameFieldsEnumTranslatedDescription TagAPIGetByNameFieldsEnum = "TranslatedDescription"
	TagAPIGetByNameFieldsEnumWebLinks              TagAPIGetByNameFieldsEnum = "WebLinks"
)

type TagAPIGetByNameLangEnum string

const (
	TagAPIGetByNameLangEnumDefault  TagAPIGetByNameLangEnum = "Default"
	TagAPIGetByNameLangEnumJapanese TagAPIGetByNameLangEnum = "Japanese"
	TagAPIGetByNameLangEnumRomaji   TagAPIGetByNameLangEnum = "Romaji"
	TagAPIGetByNameLangEnumEnglish  TagAPIGetByNameLangEnum = "English"
)

type TagAPIGetByNameQueryParams struct {
	Fields *TagAPIGetByNameFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Lang   *TagAPIGetByNameLangEnum   `queryParam:"style=form,explode=true,name=lang"`
}

type TagAPIGetByNameRequest struct {
	PathParams  TagAPIGetByNamePathParams
	QueryParams TagAPIGetByNameQueryParams
}

type TagAPIGetByNameResponse struct {
	Body              []byte
	ContentType       string
	StatusCode        int64
	TagForAPIContract *shared.TagForAPIContract
}
