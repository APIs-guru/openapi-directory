package operations

import (
	"openapi/pkg/models/shared"
)

type GetCategorySubscriptionsPathParams struct {
	UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetCategorySubscriptionsDirectionEnum string

const (
	GetCategorySubscriptionsDirectionEnumAsc  GetCategorySubscriptionsDirectionEnum = "asc"
	GetCategorySubscriptionsDirectionEnumDesc GetCategorySubscriptionsDirectionEnum = "desc"
)

type GetCategorySubscriptionsSortEnum string

const (
	GetCategorySubscriptionsSortEnumAlphabetical GetCategorySubscriptionsSortEnum = "alphabetical"
	GetCategorySubscriptionsSortEnumDate         GetCategorySubscriptionsSortEnum = "date"
	GetCategorySubscriptionsSortEnumName         GetCategorySubscriptionsSortEnum = "name"
)

type GetCategorySubscriptionsQueryParams struct {
	Direction *GetCategorySubscriptionsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *float64                               `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                               `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetCategorySubscriptionsSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetCategorySubscriptionsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetCategorySubscriptionsRequest struct {
	PathParams  GetCategorySubscriptionsPathParams
	QueryParams GetCategorySubscriptionsQueryParams
	Security    GetCategorySubscriptionsSecurity
}

type GetCategorySubscriptionsResponse struct {
	ContentType string
	StatusCode  int64
	Categories  []shared.Category
	Error       *shared.Error
}
