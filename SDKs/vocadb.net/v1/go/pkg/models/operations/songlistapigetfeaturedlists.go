package operations

import (
"openapi/pkg/models/shared")


type SongListAPIGetFeaturedListsFeaturedCategoryEnum string

const (
    SongListAPIGetFeaturedListsFeaturedCategoryEnumNothing SongListAPIGetFeaturedListsFeaturedCategoryEnum = "Nothing"
SongListAPIGetFeaturedListsFeaturedCategoryEnumConcerts SongListAPIGetFeaturedListsFeaturedCategoryEnum = "Concerts"
SongListAPIGetFeaturedListsFeaturedCategoryEnumVocaloidRanking SongListAPIGetFeaturedListsFeaturedCategoryEnum = "VocaloidRanking"
SongListAPIGetFeaturedListsFeaturedCategoryEnumPools SongListAPIGetFeaturedListsFeaturedCategoryEnum = "Pools"
SongListAPIGetFeaturedListsFeaturedCategoryEnumOther SongListAPIGetFeaturedListsFeaturedCategoryEnum = "Other"
)



type SongListAPIGetFeaturedListsFieldsEnum string

const (
    SongListAPIGetFeaturedListsFieldsEnumNone SongListAPIGetFeaturedListsFieldsEnum = "None"
SongListAPIGetFeaturedListsFieldsEnumDescription SongListAPIGetFeaturedListsFieldsEnum = "Description"
SongListAPIGetFeaturedListsFieldsEnumEvents SongListAPIGetFeaturedListsFieldsEnum = "Events"
SongListAPIGetFeaturedListsFieldsEnumMainPicture SongListAPIGetFeaturedListsFieldsEnum = "MainPicture"
SongListAPIGetFeaturedListsFieldsEnumTags SongListAPIGetFeaturedListsFieldsEnum = "Tags"
)



type SongListAPIGetFeaturedListsLangEnum string

const (
    SongListAPIGetFeaturedListsLangEnumDefault SongListAPIGetFeaturedListsLangEnum = "Default"
SongListAPIGetFeaturedListsLangEnumJapanese SongListAPIGetFeaturedListsLangEnum = "Japanese"
SongListAPIGetFeaturedListsLangEnumRomaji SongListAPIGetFeaturedListsLangEnum = "Romaji"
SongListAPIGetFeaturedListsLangEnumEnglish SongListAPIGetFeaturedListsLangEnum = "English"
)



type SongListAPIGetFeaturedListsNameMatchModeEnum string

const (
    SongListAPIGetFeaturedListsNameMatchModeEnumAuto SongListAPIGetFeaturedListsNameMatchModeEnum = "Auto"
SongListAPIGetFeaturedListsNameMatchModeEnumPartial SongListAPIGetFeaturedListsNameMatchModeEnum = "Partial"
SongListAPIGetFeaturedListsNameMatchModeEnumStartsWith SongListAPIGetFeaturedListsNameMatchModeEnum = "StartsWith"
SongListAPIGetFeaturedListsNameMatchModeEnumExact SongListAPIGetFeaturedListsNameMatchModeEnum = "Exact"
SongListAPIGetFeaturedListsNameMatchModeEnumWords SongListAPIGetFeaturedListsNameMatchModeEnum = "Words"
)



type SongListAPIGetFeaturedListsSortEnum string

const (
    SongListAPIGetFeaturedListsSortEnumNone SongListAPIGetFeaturedListsSortEnum = "None"
SongListAPIGetFeaturedListsSortEnumName SongListAPIGetFeaturedListsSortEnum = "Name"
SongListAPIGetFeaturedListsSortEnumDate SongListAPIGetFeaturedListsSortEnum = "Date"
SongListAPIGetFeaturedListsSortEnumCreateDate SongListAPIGetFeaturedListsSortEnum = "CreateDate"
)


type SongListAPIGetFeaturedListsQueryParams struct {
    ChildTags *bool `queryParam:"style=form,explode=true,name=childTags"`
    FeaturedCategory *SongListAPIGetFeaturedListsFeaturedCategoryEnum `queryParam:"style=form,explode=true,name=featuredCategory"`
    Fields *SongListAPIGetFeaturedListsFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    Lang *SongListAPIGetFeaturedListsLangEnum `queryParam:"style=form,explode=true,name=lang"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    NameMatchMode *SongListAPIGetFeaturedListsNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *SongListAPIGetFeaturedListsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    TagID []int32 `queryParam:"style=form,explode=true,name=tagId"`
    
}

type SongListAPIGetFeaturedListsRequest struct {
    QueryParams SongListAPIGetFeaturedListsQueryParams 
    
}

type SongListAPIGetFeaturedListsResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultSongListForAPIContract *shared.PartialFindResultSongListForAPIContract 
    StatusCode int64 
    
}

