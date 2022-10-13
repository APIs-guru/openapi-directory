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

type CreateVodAlt1RequestBodyBuy struct {
	Active   *bool                             `json:"active"`
	Download *bool                             `json:"download"`
	Price    *CreateVodAlt1RequestBodyBuyPrice `json:"price"`
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
	Usd *float64 `json:"USD"`
}

type CreateVodAlt1RequestBodyEpisodesBuy struct {
	Active   *bool                                     `json:"active"`
	Download *bool                                     `json:"download"`
	Price    *CreateVodAlt1RequestBodyEpisodesBuyPrice `json:"price"`
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
	Usd *float64 `json:"USD"`
}

type CreateVodAlt1RequestBodyEpisodesRent struct {
	Active *bool                                           `json:"active"`
	Period *CreateVodAlt1RequestBodyEpisodesRentPeriodEnum `json:"period"`
	Price  *CreateVodAlt1RequestBodyEpisodesRentPrice      `json:"price"`
}

type CreateVodAlt1RequestBodyEpisodes struct {
	Buy  *CreateVodAlt1RequestBodyEpisodesBuy  `json:"buy"`
	Rent *CreateVodAlt1RequestBodyEpisodesRent `json:"rent"`
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

type CreateVodAlt1RequestBodyRent struct {
	Active *bool                                   `json:"active"`
	Period *CreateVodAlt1RequestBodyRentPeriodEnum `json:"period"`
	Price  *CreateVodAlt1RequestBodyRentPrice      `json:"price"`
}

type CreateVodAlt1RequestBodySubscriptionMonthlyPrice struct {
	Usd *float64 `json:"USD"`
}

type CreateVodAlt1RequestBodySubscriptionMonthly struct {
	Active *bool                                             `json:"active"`
	Price  *CreateVodAlt1RequestBodySubscriptionMonthlyPrice `json:"price"`
}

type CreateVodAlt1RequestBodySubscription struct {
	Monthly *CreateVodAlt1RequestBodySubscriptionMonthly `json:"monthly"`
}

type CreateVodAlt1RequestBodyTypeEnum string

const (
	CreateVodAlt1RequestBodyTypeEnumFilm   CreateVodAlt1RequestBodyTypeEnum = "film"
	CreateVodAlt1RequestBodyTypeEnumSeries CreateVodAlt1RequestBodyTypeEnum = "series"
)

type CreateVodAlt1RequestBody struct {
	AcceptedCurrencies *CreateVodAlt1RequestBodyAcceptedCurrenciesEnum `json:"accepted_currencies"`
	Buy                *CreateVodAlt1RequestBodyBuy                    `json:"buy"`
	ContentRating      CreateVodAlt1RequestBodyContentRatingEnum       `json:"content_rating"`
	Description        string                                          `json:"description"`
	DomainLink         *string                                         `json:"domain_link"`
	Episodes           *CreateVodAlt1RequestBodyEpisodes               `json:"episodes"`
	Link               *string                                         `json:"link"`
	Name               string                                          `json:"name"`
	Rent               *CreateVodAlt1RequestBodyRent                   `json:"rent"`
	Subscription       *CreateVodAlt1RequestBodySubscription           `json:"subscription"`
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
