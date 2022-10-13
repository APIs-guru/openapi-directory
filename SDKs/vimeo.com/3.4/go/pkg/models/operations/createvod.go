package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVodPathParams struct {
	UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type CreateVodRequestBodyAcceptedCurrenciesEnum string

const (
	CreateVodRequestBodyAcceptedCurrenciesEnumAud CreateVodRequestBodyAcceptedCurrenciesEnum = "AUD"
	CreateVodRequestBodyAcceptedCurrenciesEnumCad CreateVodRequestBodyAcceptedCurrenciesEnum = "CAD"
	CreateVodRequestBodyAcceptedCurrenciesEnumChf CreateVodRequestBodyAcceptedCurrenciesEnum = "CHF"
	CreateVodRequestBodyAcceptedCurrenciesEnumDkk CreateVodRequestBodyAcceptedCurrenciesEnum = "DKK"
	CreateVodRequestBodyAcceptedCurrenciesEnumEur CreateVodRequestBodyAcceptedCurrenciesEnum = "EUR"
	CreateVodRequestBodyAcceptedCurrenciesEnumGbp CreateVodRequestBodyAcceptedCurrenciesEnum = "GBP"
	CreateVodRequestBodyAcceptedCurrenciesEnumJpy CreateVodRequestBodyAcceptedCurrenciesEnum = "JPY"
	CreateVodRequestBodyAcceptedCurrenciesEnumKrw CreateVodRequestBodyAcceptedCurrenciesEnum = "KRW"
	CreateVodRequestBodyAcceptedCurrenciesEnumNok CreateVodRequestBodyAcceptedCurrenciesEnum = "NOK"
	CreateVodRequestBodyAcceptedCurrenciesEnumPln CreateVodRequestBodyAcceptedCurrenciesEnum = "PLN"
	CreateVodRequestBodyAcceptedCurrenciesEnumSek CreateVodRequestBodyAcceptedCurrenciesEnum = "SEK"
	CreateVodRequestBodyAcceptedCurrenciesEnumUsd CreateVodRequestBodyAcceptedCurrenciesEnum = "USD"
)

type CreateVodRequestBodyBuyPrice struct {
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

type CreateVodRequestBodyBuy struct {
	Active   *bool                         `json:"active"`
	Download *bool                         `json:"download"`
	Price    *CreateVodRequestBodyBuyPrice `json:"price"`
}

type CreateVodRequestBodyContentRatingEnum string

const (
	CreateVodRequestBodyContentRatingEnumDrugs    CreateVodRequestBodyContentRatingEnum = "drugs"
	CreateVodRequestBodyContentRatingEnumLanguage CreateVodRequestBodyContentRatingEnum = "language"
	CreateVodRequestBodyContentRatingEnumNudity   CreateVodRequestBodyContentRatingEnum = "nudity"
	CreateVodRequestBodyContentRatingEnumSafe     CreateVodRequestBodyContentRatingEnum = "safe"
	CreateVodRequestBodyContentRatingEnumUnrated  CreateVodRequestBodyContentRatingEnum = "unrated"
	CreateVodRequestBodyContentRatingEnumViolence CreateVodRequestBodyContentRatingEnum = "violence"
)

type CreateVodRequestBodyEpisodesBuyPrice struct {
	Usd *float64 `json:"USD"`
}

type CreateVodRequestBodyEpisodesBuy struct {
	Active   *bool                                 `json:"active"`
	Download *bool                                 `json:"download"`
	Price    *CreateVodRequestBodyEpisodesBuyPrice `json:"price"`
}

type CreateVodRequestBodyEpisodesRentPeriodEnum string

const (
	CreateVodRequestBodyEpisodesRentPeriodEnumOneWeek        CreateVodRequestBodyEpisodesRentPeriodEnum = "1 week"
	CreateVodRequestBodyEpisodesRentPeriodEnumOneYear        CreateVodRequestBodyEpisodesRentPeriodEnum = "1 year"
	CreateVodRequestBodyEpisodesRentPeriodEnumTwentyFourHour CreateVodRequestBodyEpisodesRentPeriodEnum = "24 hour"
	CreateVodRequestBodyEpisodesRentPeriodEnumThreeMonth     CreateVodRequestBodyEpisodesRentPeriodEnum = "3 month"
	CreateVodRequestBodyEpisodesRentPeriodEnumThirtyDay      CreateVodRequestBodyEpisodesRentPeriodEnum = "30 day"
	CreateVodRequestBodyEpisodesRentPeriodEnumFortyEightHour CreateVodRequestBodyEpisodesRentPeriodEnum = "48 hour"
	CreateVodRequestBodyEpisodesRentPeriodEnumSixMonth       CreateVodRequestBodyEpisodesRentPeriodEnum = "6 month"
	CreateVodRequestBodyEpisodesRentPeriodEnumSeventyTwoHour CreateVodRequestBodyEpisodesRentPeriodEnum = "72 hour"
)

type CreateVodRequestBodyEpisodesRentPrice struct {
	Usd *float64 `json:"USD"`
}

type CreateVodRequestBodyEpisodesRent struct {
	Active *bool                                       `json:"active"`
	Period *CreateVodRequestBodyEpisodesRentPeriodEnum `json:"period"`
	Price  *CreateVodRequestBodyEpisodesRentPrice      `json:"price"`
}

type CreateVodRequestBodyEpisodes struct {
	Buy  *CreateVodRequestBodyEpisodesBuy  `json:"buy"`
	Rent *CreateVodRequestBodyEpisodesRent `json:"rent"`
}

type CreateVodRequestBodyRentPeriodEnum string

const (
	CreateVodRequestBodyRentPeriodEnumOneWeek        CreateVodRequestBodyRentPeriodEnum = "1 week"
	CreateVodRequestBodyRentPeriodEnumOneYear        CreateVodRequestBodyRentPeriodEnum = "1 year"
	CreateVodRequestBodyRentPeriodEnumTwentyFourHour CreateVodRequestBodyRentPeriodEnum = "24 hour"
	CreateVodRequestBodyRentPeriodEnumThreeMonth     CreateVodRequestBodyRentPeriodEnum = "3 month"
	CreateVodRequestBodyRentPeriodEnumThirtyDay      CreateVodRequestBodyRentPeriodEnum = "30 day"
	CreateVodRequestBodyRentPeriodEnumFortyEightHour CreateVodRequestBodyRentPeriodEnum = "48 hour"
	CreateVodRequestBodyRentPeriodEnumSixMonth       CreateVodRequestBodyRentPeriodEnum = "6 month"
	CreateVodRequestBodyRentPeriodEnumSeventyTwoHour CreateVodRequestBodyRentPeriodEnum = "72 hour"
)

type CreateVodRequestBodyRentPrice struct {
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

type CreateVodRequestBodyRent struct {
	Active *bool                               `json:"active"`
	Period *CreateVodRequestBodyRentPeriodEnum `json:"period"`
	Price  *CreateVodRequestBodyRentPrice      `json:"price"`
}

type CreateVodRequestBodySubscriptionMonthlyPrice struct {
	Usd *float64 `json:"USD"`
}

type CreateVodRequestBodySubscriptionMonthly struct {
	Active *bool                                         `json:"active"`
	Price  *CreateVodRequestBodySubscriptionMonthlyPrice `json:"price"`
}

type CreateVodRequestBodySubscription struct {
	Monthly *CreateVodRequestBodySubscriptionMonthly `json:"monthly"`
}

type CreateVodRequestBodyTypeEnum string

const (
	CreateVodRequestBodyTypeEnumFilm   CreateVodRequestBodyTypeEnum = "film"
	CreateVodRequestBodyTypeEnumSeries CreateVodRequestBodyTypeEnum = "series"
)

type CreateVodRequestBody struct {
	AcceptedCurrencies *CreateVodRequestBodyAcceptedCurrenciesEnum `json:"accepted_currencies"`
	Buy                *CreateVodRequestBodyBuy                    `json:"buy"`
	ContentRating      CreateVodRequestBodyContentRatingEnum       `json:"content_rating"`
	Description        string                                      `json:"description"`
	DomainLink         *string                                     `json:"domain_link"`
	Episodes           *CreateVodRequestBodyEpisodes               `json:"episodes"`
	Link               *string                                     `json:"link"`
	Name               string                                      `json:"name"`
	Rent               *CreateVodRequestBodyRent                   `json:"rent"`
	Subscription       *CreateVodRequestBodySubscription           `json:"subscription"`
	Type               CreateVodRequestBodyTypeEnum                `json:"type"`
}

type CreateVodRequest struct {
	PathParams CreateVodPathParams
	Request    CreateVodRequestBody `request:"mediaType=application/json"`
}

type CreateVodResponse struct {
	ContentType  string
	StatusCode   int64
	OnDemandPage *shared.OnDemandPage
}
