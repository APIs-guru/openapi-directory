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
	Aud *float64 `json:"AUD,omitempty"`
	Cad *float64 `json:"CAD,omitempty"`
	Chf *float64 `json:"CHF,omitempty"`
	Dkk *float64 `json:"DKK,omitempty"`
	Eur *float64 `json:"EUR,omitempty"`
	Gbp *float64 `json:"GBP,omitempty"`
	Jpy *float64 `json:"JPY,omitempty"`
	Krw *float64 `json:"KRW,omitempty"`
	Nok *float64 `json:"NOK,omitempty"`
	Pln *float64 `json:"PLN,omitempty"`
	Sek *float64 `json:"SEK,omitempty"`
	Usd *float64 `json:"USD,omitempty"`
}

type CreateVodRequestBodyBuy struct {
	Active   *bool                         `json:"active,omitempty"`
	Download *bool                         `json:"download,omitempty"`
	Price    *CreateVodRequestBodyBuyPrice `json:"price,omitempty"`
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
	Usd *float64 `json:"USD,omitempty"`
}

type CreateVodRequestBodyEpisodesBuy struct {
	Active   *bool                                 `json:"active,omitempty"`
	Download *bool                                 `json:"download,omitempty"`
	Price    *CreateVodRequestBodyEpisodesBuyPrice `json:"price,omitempty"`
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
	Usd *float64 `json:"USD,omitempty"`
}

type CreateVodRequestBodyEpisodesRent struct {
	Active *bool                                       `json:"active,omitempty"`
	Period *CreateVodRequestBodyEpisodesRentPeriodEnum `json:"period,omitempty"`
	Price  *CreateVodRequestBodyEpisodesRentPrice      `json:"price,omitempty"`
}

type CreateVodRequestBodyEpisodes struct {
	Buy  *CreateVodRequestBodyEpisodesBuy  `json:"buy,omitempty"`
	Rent *CreateVodRequestBodyEpisodesRent `json:"rent,omitempty"`
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
	Aud *float64 `json:"AUD,omitempty"`
	Cad *float64 `json:"CAD,omitempty"`
	Chf *float64 `json:"CHF,omitempty"`
	Dkk *float64 `json:"DKK,omitempty"`
	Eur *float64 `json:"EUR,omitempty"`
	Gbp *float64 `json:"GBP,omitempty"`
	Jpy *float64 `json:"JPY,omitempty"`
	Krw *float64 `json:"KRW,omitempty"`
	Nok *float64 `json:"NOK,omitempty"`
	Pln *float64 `json:"PLN,omitempty"`
	Sek *float64 `json:"SEK,omitempty"`
	Usd *float64 `json:"USD,omitempty"`
}

type CreateVodRequestBodyRent struct {
	Active *bool                               `json:"active,omitempty"`
	Period *CreateVodRequestBodyRentPeriodEnum `json:"period,omitempty"`
	Price  *CreateVodRequestBodyRentPrice      `json:"price,omitempty"`
}

type CreateVodRequestBodySubscriptionMonthlyPrice struct {
	Usd *float64 `json:"USD,omitempty"`
}

type CreateVodRequestBodySubscriptionMonthly struct {
	Active *bool                                         `json:"active,omitempty"`
	Price  *CreateVodRequestBodySubscriptionMonthlyPrice `json:"price,omitempty"`
}

type CreateVodRequestBodySubscription struct {
	Monthly *CreateVodRequestBodySubscriptionMonthly `json:"monthly,omitempty"`
}

type CreateVodRequestBodyTypeEnum string

const (
	CreateVodRequestBodyTypeEnumFilm   CreateVodRequestBodyTypeEnum = "film"
	CreateVodRequestBodyTypeEnumSeries CreateVodRequestBodyTypeEnum = "series"
)

type CreateVodRequestBody struct {
	AcceptedCurrencies *CreateVodRequestBodyAcceptedCurrenciesEnum `json:"accepted_currencies,omitempty"`
	Buy                *CreateVodRequestBodyBuy                    `json:"buy,omitempty"`
	ContentRating      CreateVodRequestBodyContentRatingEnum       `json:"content_rating"`
	Description        string                                      `json:"description"`
	DomainLink         *string                                     `json:"domain_link,omitempty"`
	Episodes           *CreateVodRequestBodyEpisodes               `json:"episodes,omitempty"`
	Link               *string                                     `json:"link,omitempty"`
	Name               string                                      `json:"name"`
	Rent               *CreateVodRequestBodyRent                   `json:"rent,omitempty"`
	Subscription       *CreateVodRequestBodySubscription           `json:"subscription,omitempty"`
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
