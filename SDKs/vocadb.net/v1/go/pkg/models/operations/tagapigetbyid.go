package operations

import (
"openapi/pkg/models/shared")

type TagAPIGetByIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}


type TagAPIGetByIDFieldsEnum string

const (
    TagAPIGetByIDFieldsEnumNone TagAPIGetByIDFieldsEnum = "None"
TagAPIGetByIDFieldsEnumAdditionalNames TagAPIGetByIDFieldsEnum = "AdditionalNames"
TagAPIGetByIDFieldsEnumAliasedTo TagAPIGetByIDFieldsEnum = "AliasedTo"
TagAPIGetByIDFieldsEnumDescription TagAPIGetByIDFieldsEnum = "Description"
TagAPIGetByIDFieldsEnumMainPicture TagAPIGetByIDFieldsEnum = "MainPicture"
TagAPIGetByIDFieldsEnumNames TagAPIGetByIDFieldsEnum = "Names"
TagAPIGetByIDFieldsEnumParent TagAPIGetByIDFieldsEnum = "Parent"
TagAPIGetByIDFieldsEnumRelatedTags TagAPIGetByIDFieldsEnum = "RelatedTags"
TagAPIGetByIDFieldsEnumTranslatedDescription TagAPIGetByIDFieldsEnum = "TranslatedDescription"
TagAPIGetByIDFieldsEnumWebLinks TagAPIGetByIDFieldsEnum = "WebLinks"
)



type TagAPIGetByIDLangEnum string

const (
    TagAPIGetByIDLangEnumDefault TagAPIGetByIDLangEnum = "Default"
TagAPIGetByIDLangEnumJapanese TagAPIGetByIDLangEnum = "Japanese"
TagAPIGetByIDLangEnumRomaji TagAPIGetByIDLangEnum = "Romaji"
TagAPIGetByIDLangEnumEnglish TagAPIGetByIDLangEnum = "English"
)


type TagAPIGetByIDQueryParams struct {
    Fields *TagAPIGetByIDFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    Lang *TagAPIGetByIDLangEnum `queryParam:"style=form,explode=true,name=lang"`
    
}

type TagAPIGetByIDRequest struct {
    PathParams TagAPIGetByIDPathParams 
    QueryParams TagAPIGetByIDQueryParams 
    
}

type TagAPIGetByIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TagForAPIContract *shared.TagForAPIContract 
    
}

