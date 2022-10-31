package operations

import (
"time"
"openapi/pkg/models/shared")


type UserAPIGetListFieldsEnum string

const (
    UserAPIGetListFieldsEnumNone UserAPIGetListFieldsEnum = "None"
UserAPIGetListFieldsEnumKnownLanguages UserAPIGetListFieldsEnum = "KnownLanguages"
UserAPIGetListFieldsEnumMainPicture UserAPIGetListFieldsEnum = "MainPicture"
UserAPIGetListFieldsEnumOldUsernames UserAPIGetListFieldsEnum = "OldUsernames"
)



type UserAPIGetListGroupsEnum string

const (
    UserAPIGetListGroupsEnumNothing UserAPIGetListGroupsEnum = "Nothing"
UserAPIGetListGroupsEnumLimited UserAPIGetListGroupsEnum = "Limited"
UserAPIGetListGroupsEnumRegular UserAPIGetListGroupsEnum = "Regular"
UserAPIGetListGroupsEnumTrusted UserAPIGetListGroupsEnum = "Trusted"
UserAPIGetListGroupsEnumModerator UserAPIGetListGroupsEnum = "Moderator"
UserAPIGetListGroupsEnumAdmin UserAPIGetListGroupsEnum = "Admin"
)



type UserAPIGetListNameMatchModeEnum string

const (
    UserAPIGetListNameMatchModeEnumAuto UserAPIGetListNameMatchModeEnum = "Auto"
UserAPIGetListNameMatchModeEnumPartial UserAPIGetListNameMatchModeEnum = "Partial"
UserAPIGetListNameMatchModeEnumStartsWith UserAPIGetListNameMatchModeEnum = "StartsWith"
UserAPIGetListNameMatchModeEnumExact UserAPIGetListNameMatchModeEnum = "Exact"
UserAPIGetListNameMatchModeEnumWords UserAPIGetListNameMatchModeEnum = "Words"
)



type UserAPIGetListSortEnum string

const (
    UserAPIGetListSortEnumRegisterDate UserAPIGetListSortEnum = "RegisterDate"
UserAPIGetListSortEnumName UserAPIGetListSortEnum = "Name"
UserAPIGetListSortEnumGroup UserAPIGetListSortEnum = "Group"
)


type UserAPIGetListQueryParams struct {
    Fields *UserAPIGetListFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GetTotalCount *bool `queryParam:"style=form,explode=true,name=getTotalCount"`
    Groups *UserAPIGetListGroupsEnum `queryParam:"style=form,explode=true,name=groups"`
    IncludeDisabled *bool `queryParam:"style=form,explode=true,name=includeDisabled"`
    JoinDateAfter *time.Time `queryParam:"style=form,explode=true,name=joinDateAfter"`
    JoinDateBefore *time.Time `queryParam:"style=form,explode=true,name=joinDateBefore"`
    KnowsLanguage *string `queryParam:"style=form,explode=true,name=knowsLanguage"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    NameMatchMode *UserAPIGetListNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
    OnlyVerified *bool `queryParam:"style=form,explode=true,name=onlyVerified"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *UserAPIGetListSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    
}

type UserAPIGetListRequest struct {
    QueryParams UserAPIGetListQueryParams 
    
}

type UserAPIGetListResponse struct {
    Body []byte 
    ContentType string 
    PartialFindResultUserForAPIContract *shared.PartialFindResultUserForAPIContract 
    StatusCode int64 
    
}

