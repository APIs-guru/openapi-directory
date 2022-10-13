package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommentsAlt1PathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type GetCommentsAlt1DirectionEnum string

const (
	GetCommentsAlt1DirectionEnumAsc  GetCommentsAlt1DirectionEnum = "asc"
	GetCommentsAlt1DirectionEnumDesc GetCommentsAlt1DirectionEnum = "desc"
)

type GetCommentsAlt1QueryParams struct {
	Direction *GetCommentsAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *float64                      `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                      `queryParam:"style=form,explode=true,name=per_page"`
}

type GetCommentsAlt1Request struct {
	PathParams  GetCommentsAlt1PathParams
	QueryParams GetCommentsAlt1QueryParams
}

type GetCommentsAlt1Response struct {
	ContentType string
	StatusCode  int64
	Comments    []shared.Comment
}
