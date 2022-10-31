package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodPromotionsPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type GetVodPromotionsFilterEnum string

const (
	GetVodPromotionsFilterEnumBatch   GetVodPromotionsFilterEnum = "batch"
	GetVodPromotionsFilterEnumDefault GetVodPromotionsFilterEnum = "default"
	GetVodPromotionsFilterEnumSingle  GetVodPromotionsFilterEnum = "single"
	GetVodPromotionsFilterEnumVip     GetVodPromotionsFilterEnum = "vip"
)

type GetVodPromotionsQueryParams struct {
	Filter  GetVodPromotionsFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	Page    *float64                   `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64                   `queryParam:"style=form,explode=true,name=per_page"`
}

type GetVodPromotionsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetVodPromotionsRequest struct {
	PathParams  GetVodPromotionsPathParams
	QueryParams GetVodPromotionsQueryParams
	Security    GetVodPromotionsSecurity
}

type GetVodPromotionsResponse struct {
	ContentType       string
	StatusCode        int64
	LegacyError       *shared.LegacyError
	OnDemandPromotion *shared.OnDemandPromotion
}
