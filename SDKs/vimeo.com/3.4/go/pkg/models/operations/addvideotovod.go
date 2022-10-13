package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideoToVodPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
	VideoID    float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type AddVideoToVodRequestBodyBuyPrice struct {
	Aud *float64 `json:"AUD"`
	Cad *float64 `json:"CAD"`
	Chf *float64 `json:"CHF"`
	Dkk *float64 `json:"DKK"`
	Eur *float64 `json:"EUR"`
	Gbp *float64 `json:"GBP"`
	Jpy *float64 `json:"JPY"`
	Krw *float64 `json:"KRW"`
	Nok *float64 `json:"NOK"`
	Pln *float64 `json:"PLN"`
	Sek *float64 `json:"SEK"`
	Usd *float64 `json:"USD"`
}

type AddVideoToVodRequestBodyBuy struct {
	Price *AddVideoToVodRequestBodyBuyPrice `json:"price"`
}

type AddVideoToVodRequestBodyRentPrice struct {
	Aud *float64 `json:"AUD"`
	Cad *float64 `json:"CAD"`
	Chf *float64 `json:"CHF"`
	Dkk *float64 `json:"DKK"`
	Eur *float64 `json:"EUR"`
	Gbp *float64 `json:"GBP"`
	Jpy *float64 `json:"JPY"`
	Krw *float64 `json:"KRW"`
	Nok *float64 `json:"NOK"`
	Pln *float64 `json:"PLN"`
	Sek *float64 `json:"SEK"`
	Usd *float64 `json:"USD"`
}

type AddVideoToVodRequestBodyRent struct {
	Price *AddVideoToVodRequestBodyRentPrice `json:"price"`
}

type AddVideoToVodRequestBodyTypeEnum string

const (
	AddVideoToVodRequestBodyTypeEnumExtra   AddVideoToVodRequestBodyTypeEnum = "extra"
	AddVideoToVodRequestBodyTypeEnumMain    AddVideoToVodRequestBodyTypeEnum = "main"
	AddVideoToVodRequestBodyTypeEnumTrailer AddVideoToVodRequestBodyTypeEnum = "trailer"
)

type AddVideoToVodRequestBody struct {
	Buy         *AddVideoToVodRequestBodyBuy     `json:"buy"`
	Position    *float64                         `json:"position"`
	ReleaseYear *float64                         `json:"release_year"`
	Rent        *AddVideoToVodRequestBodyRent    `json:"rent"`
	Type        AddVideoToVodRequestBodyTypeEnum `json:"type"`
}

type AddVideoToVodSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVideoToVodRequest struct {
	PathParams AddVideoToVodPathParams
	Request    AddVideoToVodRequestBody `request:"mediaType=application/vnd.vimeo.ondemand.video+json"`
	Security   AddVideoToVodSecurity
}

type AddVideoToVodResponse struct {
	ContentType   string
	StatusCode    int64
	LegacyError   *shared.LegacyError
	OnDemandVideo *shared.OnDemandVideo
}
