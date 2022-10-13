package operations

import (
	"openapi/pkg/models/shared"
)

type PutMyListingsSlugStateEndPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type PutMyListingsSlugStateEndRequestBodyReasonEnum string

const (
	PutMyListingsSlugStateEndRequestBodyReasonEnumNotSold    PutMyListingsSlugStateEndRequestBodyReasonEnum = "not_sold"
	PutMyListingsSlugStateEndRequestBodyReasonEnumReverbSale PutMyListingsSlugStateEndRequestBodyReasonEnum = "reverb_sale"
)

type PutMyListingsSlugStateEndRequestBody struct {
	Reason PutMyListingsSlugStateEndRequestBodyReasonEnum `json:"reason"`
}

type PutMyListingsSlugStateEndSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutMyListingsSlugStateEndRequest struct {
	PathParams PutMyListingsSlugStateEndPathParams
	Request    *PutMyListingsSlugStateEndRequestBody `request:"mediaType=application/json"`
	Security   PutMyListingsSlugStateEndSecurity
}

type PutMyListingsSlugStateEndResponse struct {
	ContentType string
	StatusCode  int64
}
