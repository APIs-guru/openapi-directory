package operations

import (
	"openapi/pkg/models/shared"
)

type UserAPIGetSongListsPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type UserAPIGetSongListsFieldsEnum string

const (
	UserAPIGetSongListsFieldsEnumNone        UserAPIGetSongListsFieldsEnum = "None"
	UserAPIGetSongListsFieldsEnumDescription UserAPIGetSongListsFieldsEnum = "Description"
	UserAPIGetSongListsFieldsEnumEvents      UserAPIGetSongListsFieldsEnum = "Events"
	UserAPIGetSongListsFieldsEnumMainPicture UserAPIGetSongListsFieldsEnum = "MainPicture"
	UserAPIGetSongListsFieldsEnumTags        UserAPIGetSongListsFieldsEnum = "Tags"
)

type UserAPIGetSongListsNameMatchModeEnum string

const (
	UserAPIGetSongListsNameMatchModeEnumAuto       UserAPIGetSongListsNameMatchModeEnum = "Auto"
	UserAPIGetSongListsNameMatchModeEnumPartial    UserAPIGetSongListsNameMatchModeEnum = "Partial"
	UserAPIGetSongListsNameMatchModeEnumStartsWith UserAPIGetSongListsNameMatchModeEnum = "StartsWith"
	UserAPIGetSongListsNameMatchModeEnumExact      UserAPIGetSongListsNameMatchModeEnum = "Exact"
	UserAPIGetSongListsNameMatchModeEnumWords      UserAPIGetSongListsNameMatchModeEnum = "Words"
)

type UserAPIGetSongListsSortEnum string

const (
	UserAPIGetSongListsSortEnumNone       UserAPIGetSongListsSortEnum = "None"
	UserAPIGetSongListsSortEnumName       UserAPIGetSongListsSortEnum = "Name"
	UserAPIGetSongListsSortEnumDate       UserAPIGetSongListsSortEnum = "Date"
	UserAPIGetSongListsSortEnumCreateDate UserAPIGetSongListsSortEnum = "CreateDate"
)

type UserAPIGetSongListsQueryParams struct {
	ChildTags     *bool                                 `queryParam:"style=form,explode=true,name=childTags"`
	Fields        *UserAPIGetSongListsFieldsEnum        `queryParam:"style=form,explode=true,name=fields"`
	GetTotalCount *bool                                 `queryParam:"style=form,explode=true,name=getTotalCount"`
	MaxResults    *int32                                `queryParam:"style=form,explode=true,name=maxResults"`
	NameMatchMode *UserAPIGetSongListsNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
	Query         *string                               `queryParam:"style=form,explode=true,name=query"`
	Sort          *UserAPIGetSongListsSortEnum          `queryParam:"style=form,explode=true,name=sort"`
	Start         *int32                                `queryParam:"style=form,explode=true,name=start"`
	TagID         []int32                               `queryParam:"style=form,explode=true,name=tagId"`
}

type UserAPIGetSongListsRequest struct {
	PathParams  UserAPIGetSongListsPathParams
	QueryParams UserAPIGetSongListsQueryParams
}

type UserAPIGetSongListsResponse struct {
	Body                                    []byte
	ContentType                             string
	PartialFindResultSongListForAPIContract *shared.PartialFindResultSongListForAPIContract
	StatusCode                              int64
}
