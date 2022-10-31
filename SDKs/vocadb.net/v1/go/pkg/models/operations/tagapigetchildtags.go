package operations

import (
"openapi/pkg/models/shared")

type TagAPIGetChildTagsPathParams struct {
    TagID int32 `pathParam:"style=simple,explode=false,name=tagId"`
    
}


type TagAPIGetChildTagsFieldsEnum string

const (
    TagAPIGetChildTagsFieldsEnumNone TagAPIGetChildTagsFieldsEnum = "None"
TagAPIGetChildTagsFieldsEnumAdditionalNames TagAPIGetChildTagsFieldsEnum = "AdditionalNames"
TagAPIGetChildTagsFieldsEnumAliasedTo TagAPIGetChildTagsFieldsEnum = "AliasedTo"
TagAPIGetChildTagsFieldsEnumDescription TagAPIGetChildTagsFieldsEnum = "Description"
TagAPIGetChildTagsFieldsEnumMainPicture TagAPIGetChildTagsFieldsEnum = "MainPicture"
TagAPIGetChildTagsFieldsEnumNames TagAPIGetChildTagsFieldsEnum = "Names"
TagAPIGetChildTagsFieldsEnumParent TagAPIGetChildTagsFieldsEnum = "Parent"
TagAPIGetChildTagsFieldsEnumRelatedTags TagAPIGetChildTagsFieldsEnum = "RelatedTags"
TagAPIGetChildTagsFieldsEnumTranslatedDescription TagAPIGetChildTagsFieldsEnum = "TranslatedDescription"
TagAPIGetChildTagsFieldsEnumWebLinks TagAPIGetChildTagsFieldsEnum = "WebLinks"
)



type TagAPIGetChildTagsLangEnum string

const (
    TagAPIGetChildTagsLangEnumDefault TagAPIGetChildTagsLangEnum = "Default"
TagAPIGetChildTagsLangEnumJapanese TagAPIGetChildTagsLangEnum = "Japanese"
TagAPIGetChildTagsLangEnumRomaji TagAPIGetChildTagsLangEnum = "Romaji"
TagAPIGetChildTagsLangEnumEnglish TagAPIGetChildTagsLangEnum = "English"
)


type TagAPIGetChildTagsQueryParams struct {
    Fields *TagAPIGetChildTagsFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    Lang *TagAPIGetChildTagsLangEnum `queryParam:"style=form,explode=true,name=lang"`
    
}

type TagAPIGetChildTagsRequest struct {
    PathParams TagAPIGetChildTagsPathParams 
    QueryParams TagAPIGetChildTagsQueryParams 
    
}

type TagAPIGetChildTagsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TagForAPIContracts []shared.TagForAPIContract 
    
}

