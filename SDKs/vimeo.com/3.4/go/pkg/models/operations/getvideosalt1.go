package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideosAlt1DirectionEnum string

const (
	GetVideosAlt1DirectionEnumAsc  GetVideosAlt1DirectionEnum = "asc"
	GetVideosAlt1DirectionEnumDesc GetVideosAlt1DirectionEnum = "desc"
)

type GetVideosAlt1FilterEnum string

const (
	GetVideosAlt1FilterEnumAppOnly    GetVideosAlt1FilterEnum = "app_only"
	GetVideosAlt1FilterEnumEmbeddable GetVideosAlt1FilterEnum = "embeddable"
	GetVideosAlt1FilterEnumFeatured   GetVideosAlt1FilterEnum = "featured"
	GetVideosAlt1FilterEnumPlayable   GetVideosAlt1FilterEnum = "playable"
)

type GetVideosAlt1SortEnum string

const (
	GetVideosAlt1SortEnumAlphabetical            GetVideosAlt1SortEnum = "alphabetical"
	GetVideosAlt1SortEnumComments                GetVideosAlt1SortEnum = "comments"
	GetVideosAlt1SortEnumDate                    GetVideosAlt1SortEnum = "date"
	GetVideosAlt1SortEnumDefault                 GetVideosAlt1SortEnum = "default"
	GetVideosAlt1SortEnumDuration                GetVideosAlt1SortEnum = "duration"
	GetVideosAlt1SortEnumLastUserActionEventDate GetVideosAlt1SortEnum = "last_user_action_event_date"
	GetVideosAlt1SortEnumLikes                   GetVideosAlt1SortEnum = "likes"
	GetVideosAlt1SortEnumModifiedTime            GetVideosAlt1SortEnum = "modified_time"
	GetVideosAlt1SortEnumPlays                   GetVideosAlt1SortEnum = "plays"
)

type GetVideosAlt1QueryParams struct {
	ContainingURI    *string                     `queryParam:"style=form,explode=true,name=containing_uri"`
	Direction        *GetVideosAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter           *GetVideosAlt1FilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	FilterEmbeddable *bool                       `queryParam:"style=form,explode=true,name=filter_embeddable"`
	FilterPlayable   *bool                       `queryParam:"style=form,explode=true,name=filter_playable"`
	Page             *float64                    `queryParam:"style=form,explode=true,name=page"`
	PerPage          *float64                    `queryParam:"style=form,explode=true,name=per_page"`
	Query            *string                     `queryParam:"style=form,explode=true,name=query"`
	Sort             *GetVideosAlt1SortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetVideosAlt1Request struct {
	QueryParams GetVideosAlt1QueryParams
}

type GetVideosAlt1Response struct {
	ContentType string
	StatusCode  int64
	Videos      []shared.Video
}
