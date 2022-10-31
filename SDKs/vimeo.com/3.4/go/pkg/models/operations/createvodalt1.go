package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVodAlt1RequestBodyAcceptedCurrenciesEnum string

const (
	CreateVodAlt1RequestBodyAcceptedCurrenciesEnumAud CreateVodAlt1RequestBodyAcceptedCurrenciesEnum = "AUD"
	CreateVodAlt1RequestBodyAcceptedCurrenciesEnumCad CreateVodAlt1RequestBodyAcceptedCurrenciesEnum = "CAD"
	CreateVodAlt1RequestBodyAcceptedCurrenciesEnumChf CreateVodAlt1RequestBodyAcceptedCurrenciesEnum = "CHF"
	CreateVodAlt1RequestBodyAcceptedCurrenciesEnumDkk CreateVodAlt1RequestBodyAcceptedCurrenciesEnum = "DKK"
	CreateVodAlt1RequestBodyAcceptedCurrenciesEnumEur CreateVodAlt1RequestBodyAcceptedCurrenciesEnum = "EUR"
	CreateVodAlt1RequestBodyAcceptedCurrenciesEnumGbp CreateVodAlt1RequestBodyAcceptedCurrenciesEnum = "GBP"
	CreateVodAlt1RequestBodyAcceptedCurrenciesEnumJpy CreateVodAlt1RequestBodyAcceptedCurrenciesEnum = "JPY"
	CreateVodAlt1RequestBodyAcceptedCurrenciesEnumKrw CreateVodAlt1RequestBodyAcceptedCurrenciesEnum = "KRW"
	CreateVodAlt1RequestBodyAcceptedCurrenciesEnumNok CreateVodAlt1RequestBodyAcceptedCurrenciesEnum = "NOK"
	CreateVodAlt1RequestBodyAcceptedCurrenciesEnumPln CreateVodAlt1RequestBodyAcceptedCurrenciesEnum = "PLN"
	CreateVodAlt1RequestBodyAcceptedCurrenciesEnumSek CreateVodAlt1RequestBodyAcceptedCurrenciesEnum = "SEK"
	CreateVodAlt1RequestBodyAcceptedCurrenciesEnumUsd CreateVodAlt1RequestBodyAcceptedCurrenciesEnum = "USD"
)

type CreateVodAlt1RequestBodyBuyPrice struct {
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

type CreateVodAlt1RequestBodyBuy struct {
	Active   *bool                             `json:"active,omitempty"`
	Download *bool                             `json:"download,omitempty"`
	Price    *CreateVodAlt1RequestBodyBuyPrice `json:"price,omitempty"`
}

type CreateVodAlt1RequestBodyContentRatingEnum string

const (
	CreateVodAlt1RequestBodyContentRatingEnumDrugs    CreateVodAlt1RequestBodyContentRatingEnum = "drugs"
	CreateVodAlt1RequestBodyContentRatingEnumLanguage CreateVodAlt1RequestBodyContentRatingEnum = "language"
	CreateVodAlt1RequestBodyContentRatingEnumNudity   CreateVodAlt1RequestBodyContentRatingEnum = "nudity"
	CreateVodAlt1RequestBodyContentRatingEnumSafe     CreateVodAlt1RequestBodyContentRatingEnum = "safe"
	CreateVodAlt1RequestBodyContentRatingEnumUnrated  CreateVodAlt1RequestBodyContentRatingEnum = "unrated"
	CreateVodAlt1RequestBodyContentRatingEnumViolence CreateVodAlt1RequestBodyContentRatingEnum = "violence"
)

type CreateVodAlt1RequestBodyEpisodesBuyPrice struct {
	Usd *float64 `json:"USD,omitempty"`
}

type CreateVodAlt1RequestBodyEpisodesBuy struct {
	Active   *bool                                     `json:"active,omitempty"`
	Download *bool                                     `json:"download,omitempty"`
	Price    *CreateVodAlt1RequestBodyEpisodesBuyPrice `json:"price,omitempty"`
}

type CreateVodAlt1RequestBodyEpisodesRentPeriodEnum string

const (
	CreateVodAlt1RequestBodyEpisodesRentPeriodEnumOneWeek        CreateVodAlt1RequestBodyEpisodesRentPeriodEnum = "1 week"
	CreateVodAlt1RequestBodyEpisodesRentPeriodEnumOneYear        CreateVodAlt1RequestBodyEpisodesRentPeriodEnum = "1 year"
	CreateVodAlt1RequestBodyEpisodesRentPeriodEnumTwentyFourHour CreateVodAlt1RequestBodyEpisodesRentPeriodEnum = "24 hour"
	CreateVodAlt1RequestBodyEpisodesRentPeriodEnumThreeMonth     CreateVodAlt1RequestBodyEpisodesRentPeriodEnum = "3 month"
	CreateVodAlt1RequestBodyEpisodesRentPeriodEnumThirtyDay      CreateVodAlt1RequestBodyEpisodesRentPeriodEnum = "30 day"
	CreateVodAlt1RequestBodyEpisodesRentPeriodEnumFortyEightHour CreateVodAlt1RequestBodyEpisodesRentPeriodEnum = "48 hour"
	CreateVodAlt1RequestBodyEpisodesRentPeriodEnumSixMonth       CreateVodAlt1RequestBodyEpisodesRentPeriodEnum = "6 month"
	CreateVodAlt1RequestBodyEpisodesRentPeriodEnumSeventyTwoHour CreateVodAlt1RequestBodyEpisodesRentPeriodEnum = "72 hour"
)

type CreateVodAlt1RequestBodyEpisodesRentPrice struct {
	Usd *float64 `json:"USD,omitempty"`
}

type CreateVodAlt1RequestBodyEpisodesRent struct {
	Active *bool                                           `json:"active,omitempty"`
	Period *CreateVodAlt1RequestBodyEpisodesRentPeriodEnum `json:"period,omitempty"`
	Price  *CreateVodAlt1RequestBodyEpisodesRentPrice      `json:"price,omitempty"`
}

type CreateVodAlt1RequestBodyEpisodes struct {
	Buy  *CreateVodAlt1RequestBodyEpisodesBuy  `json:"buy,omitempty"`
	Rent *CreateVodAlt1RequestBodyEpisodesRent `json:"rent,omitempty"`
}

type CreateVodAlt1RequestBodyRentPeriodEnum string

const (
	CreateVodAlt1RequestBodyRentPeriodEnumOneWeek        CreateVodAlt1RequestBodyRentPeriodEnum = "1 week"
	CreateVodAlt1RequestBodyRentPeriodEnumOneYear        CreateVodAlt1RequestBodyRentPeriodEnum = "1 year"
	CreateVodAlt1RequestBodyRentPeriodEnumTwentyFourHour CreateVodAlt1RequestBodyRentPeriodEnum = "24 hour"
	CreateVodAlt1RequestBodyRentPeriodEnumThreeMonth     CreateVodAlt1RequestBodyRentPeriodEnum = "3 month"
	CreateVodAlt1RequestBodyRentPeriodEnumThirtyDay      CreateVodAlt1RequestBodyRentPeriodEnum = "30 day"
	CreateVodAlt1RequestBodyRentPeriodEnumFortyEightHour CreateVodAlt1RequestBodyRentPeriodEnum = "48 hour"
	CreateVodAlt1RequestBodyRentPeriodEnumSixMonth       CreateVodAlt1RequestBodyRentPeriodEnum = "6 month"
	CreateVodAlt1RequestBodyRentPeriodEnumSeventyTwoHour CreateVodAlt1RequestBodyRentPeriodEnum = "72 hour"
)

type CreateVodAlt1RequestBodyRentPrice struct {
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

type CreateVodAlt1RequestBodyRent struct {
	Active *bool                                   `json:"active,omitempty"`
	Period *CreateVodAlt1RequestBodyRentPeriodEnum `json:"period,omitempty"`
	Price  *CreateVodAlt1RequestBodyRentPrice      `json:"price,omitempty"`
}

type CreateVodAlt1RequestBodySubscriptionMonthlyPrice struct {
	Usd *float64 `json:"USD,omitempty"`
}

type CreateVodAlt1RequestBodySubscriptionMonthly struct {
	Active *bool                                             `json:"active,omitempty"`
	Price  *CreateVodAlt1RequestBodySubscriptionMonthlyPrice `json:"price,omitempty"`
}

type CreateVodAlt1RequestBodySubscription struct {
	Monthly *CreateVodAlt1RequestBodySubscriptionMonthly `json:"monthly,omitempty"`
}

type CreateVodAlt1RequestBodyTypeEnum string

const (
	CreateVodAlt1RequestBodyTypeEnumFilm   CreateVodAlt1RequestBodyTypeEnum = "film"
	CreateVodAlt1RequestBodyTypeEnumSeries CreateVodAlt1RequestBodyTypeEnum = "series"
)

type CreateVodAlt1RequestBody struct {
	AcceptedCurrencies *CreateVodAlt1RequestBodyAcceptedCurrenciesEnum `json:"accepted_currencies,omitempty"`
	Buy                *CreateVodAlt1RequestBodyBuy                    `json:"buy,omitempty"`
	ContentRating      CreateVodAlt1RequestBodyContentRatingEnum       `json:"content_rating"`
	Description        string                                          `json:"description"`
	DomainLink         *string                                         `json:"domain_link,omitempty"`
	Episodes           *CreateVodAlt1RequestBodyEpisodes               `json:"episodes,omitempty"`
	Link               *string                                         `json:"link,omitempty"`
	Name               string                                          `json:"name"`
	Rent               *CreateVodAlt1RequestBodyRent                   `json:"rent,omitempty"`
	Subscription       *CreateVodAlt1RequestBodySubscription           `json:"subscription,omitempty"`
	Type               CreateVodAlt1RequestBodyTypeEnum                `json:"type"`
}

type CreateVodAlt1Request struct {
	Request CreateVodAlt1RequestBody `request:"mediaType=application/json"`
}

type CreateVodAlt1Response struct {
	ContentType  string
	StatusCode   int64
	OnDemandPage *shared.OnDemandPage
}
