package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodPurchasesDirectionEnum string

const (
	GetVodPurchasesDirectionEnumAsc  GetVodPurchasesDirectionEnum = "asc"
	GetVodPurchasesDirectionEnumDesc GetVodPurchasesDirectionEnum = "desc"
)

type GetVodPurchasesFilterEnum string

const (
	GetVodPurchasesFilterEnumAll          GetVodPurchasesFilterEnum = "all"
	GetVodPurchasesFilterEnumExpiringSoon GetVodPurchasesFilterEnum = "expiring_soon"
	GetVodPurchasesFilterEnumFilm         GetVodPurchasesFilterEnum = "film"
	GetVodPurchasesFilterEnumImportant    GetVodPurchasesFilterEnum = "important"
	GetVodPurchasesFilterEnumPurchased    GetVodPurchasesFilterEnum = "purchased"
	GetVodPurchasesFilterEnumRented       GetVodPurchasesFilterEnum = "rented"
	GetVodPurchasesFilterEnumSeries       GetVodPurchasesFilterEnum = "series"
	GetVodPurchasesFilterEnumSubscription GetVodPurchasesFilterEnum = "subscription"
	GetVodPurchasesFilterEnumUnwatched    GetVodPurchasesFilterEnum = "unwatched"
	GetVodPurchasesFilterEnumWatched      GetVodPurchasesFilterEnum = "watched"
)

type GetVodPurchasesSortEnum string

const (
	GetVodPurchasesSortEnumAdded        GetVodPurchasesSortEnum = "added"
	GetVodPurchasesSortEnumAlphabetical GetVodPurchasesSortEnum = "alphabetical"
	GetVodPurchasesSortEnumDate         GetVodPurchasesSortEnum = "date"
	GetVodPurchasesSortEnumName         GetVodPurchasesSortEnum = "name"
	GetVodPurchasesSortEnumPurchaseTime GetVodPurchasesSortEnum = "purchase_time"
	GetVodPurchasesSortEnumRating       GetVodPurchasesSortEnum = "rating"
	GetVodPurchasesSortEnumReleaseDate  GetVodPurchasesSortEnum = "release_date"
)

type GetVodPurchasesQueryParams struct {
	Direction *GetVodPurchasesDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *GetVodPurchasesFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                      `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                      `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetVodPurchasesSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetVodPurchasesSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetVodPurchasesRequest struct {
	QueryParams GetVodPurchasesQueryParams
	Security    GetVodPurchasesSecurity
}

type GetVodPurchasesResponse struct {
	ContentType   string
	StatusCode    int64
	LegacyError   *shared.LegacyError
	OnDemandPages []shared.OnDemandPage
}
