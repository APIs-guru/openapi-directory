package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodSeasonsPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type GetVodSeasonsDirectionEnum string

const (
	GetVodSeasonsDirectionEnumAsc  GetVodSeasonsDirectionEnum = "asc"
	GetVodSeasonsDirectionEnumDesc GetVodSeasonsDirectionEnum = "desc"
)

type GetVodSeasonsFilterEnum string

const (
	GetVodSeasonsFilterEnumViewable GetVodSeasonsFilterEnum = "viewable"
)

type GetVodSeasonsSortEnum string

const (
	GetVodSeasonsSortEnumDate   GetVodSeasonsSortEnum = "date"
	GetVodSeasonsSortEnumManual GetVodSeasonsSortEnum = "manual"
)

type GetVodSeasonsQueryParams struct {
	Direction *GetVodSeasonsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *GetVodSeasonsFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                    `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                    `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetVodSeasonsSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetVodSeasonsRequest struct {
	PathParams  GetVodSeasonsPathParams
	QueryParams GetVodSeasonsQueryParams
}

type GetVodSeasonsResponse struct {
	ContentType     string
	StatusCode      int64
	LegacyError     *shared.LegacyError
	OnDemandSeasons []shared.OnDemandSeason
}
