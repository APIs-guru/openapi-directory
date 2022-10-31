package operations

import (
"openapi/pkg/models/shared")


type VenueAPIGetListDistanceUnitEnum string

const (
    VenueAPIGetListDistanceUnitEnumKilometers VenueAPIGetListDistanceUnitEnum = "Kilometers"
VenueAPIGetListDistanceUnitEnumMiles VenueAPIGetListDistanceUnitEnum = "Miles"
)



type VenueAPIGetListFieldsEnum string

const (
    VenueAPIGetListFieldsEnumNone VenueAPIGetListFieldsEnum = "None"
VenueAPIGetListFieldsEnumAdditionalNames VenueAPIGetListFieldsEnum = "AdditionalNames"
VenueAPIGetListFieldsEnumDescription VenueAPIGetListFieldsEnum = "Description"
VenueAPIGetListFieldsEnumEvents VenueAPIGetListFieldsEnum = "Events"
VenueAPIGetListFieldsEnumNames VenueAPIGetListFieldsEnum = "Names"
VenueAPIGetListFieldsEnumWebLinks VenueAPIGetListFieldsEnum = "WebLinks"
)



type VenueAPIGetListLangEnum string

const (
    VenueAPIGetListLangEnumDefault VenueAPIGetListLangEnum = "Default"
VenueAPIGetListLangEnumJapanese VenueAPIGetListLangEnum = "Japanese"
VenueAPIGetListLangEnumRomaji VenueAPIGetListLangEnum = "Romaji"
VenueAPIGetListLangEnumEnglish VenueAPIGetListLangEnum = "English"
)



type VenueAPIGetListNameMatchModeEnum string

const (
    VenueAPIGetListNameMatchModeEnumAuto VenueAPIGetListNameMatchModeEnum = "Auto"
VenueAPIGetListNameMatchModeEnumPartial VenueAPIGetListNameMatchModeEnum = "Partial"
VenueAPIGetListNameMatchModeEnumStartsWith VenueAPIGetListNameMatchModeEnum = "StartsWith"
VenueAPIGetListNameMatchModeEnumExact VenueAPIGetListNameMatchModeEnum = "Exact"
VenueAPIGetListNameMatchModeEnumWords VenueAPIGetListNameMatchModeEnum = "Words"
)



type VenueAPIGetListSortRuleEnum string

const (
    VenueAPIGetListSortRuleEnumNone VenueAPIGetListSortRuleEnum = "None"
VenueAPIGetListSortRuleEnumName VenueAPIGetListSortRuleEnum = "Name"
VenueAPIGetListSortRuleEnumDistance VenueAPIGetListSortRuleEnum = "Distance"
)


type VenueAPIGetListQueryParams struct {
    DistanceUnit *VenueAPIGetListDistanceUnitEnum `queryParam:"style=form,explode=true,name=distanceUnit"`
    Fields *VenueAPIGetListFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    Lang *VenueAPIGetListLangEnum `queryParam:"style=form,explode=true,name=lang"`
    Latitude *float64 `queryParam:"style=form,explode=true,name=latitude"`
    Longitude *float64 `queryParam:"style=form,explode=true,name=longitude"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    NameMatchMode *VenueAPIGetListNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Radius *float64 `queryParam:"style=form,explode=true,name=radius"`
    SortRule *VenueAPIGetListSortRuleEnum `queryParam:"style=form,explode=true,name=sortRule"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    
}

type VenueAPIGetListRequest struct {
    QueryParams VenueAPIGetListQueryParams 
    
}

type VenueAPIGetListResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultVenueForAPIContract *shared.PartialFindResultVenueForAPIContract 
    StatusCode int64 
    
}

