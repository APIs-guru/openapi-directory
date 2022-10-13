package operations

import (
	"openapi/pkg/models/shared"
)

type CheckIfVodWasPurchasedAlt1PathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type CheckIfVodWasPurchasedAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CheckIfVodWasPurchasedAlt1Request struct {
	PathParams CheckIfVodWasPurchasedAlt1PathParams
	Security   CheckIfVodWasPurchasedAlt1Security
}

type CheckIfVodWasPurchasedAlt1Response struct {
	ContentType  string
	StatusCode   int64
	LegacyError  *shared.LegacyError
	OnDemandPage *shared.OnDemandPage
}
