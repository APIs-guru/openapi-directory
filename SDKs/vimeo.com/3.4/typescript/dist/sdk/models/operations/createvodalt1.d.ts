import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateVodAlt1RequestBodyAcceptedCurrenciesEnum {
    Aud = "AUD",
    Cad = "CAD",
    Chf = "CHF",
    Dkk = "DKK",
    Eur = "EUR",
    Gbp = "GBP",
    Jpy = "JPY",
    Krw = "KRW",
    Nok = "NOK",
    Pln = "PLN",
    Sek = "SEK",
    Usd = "USD"
}
export declare class CreateVodAlt1RequestBodyBuyPrice extends SpeakeasyBase {
    aud?: number;
    cad?: number;
    chf?: number;
    dkk?: number;
    eur?: number;
    gbp?: number;
    jpy?: number;
    krw?: number;
    nok?: number;
    pln?: number;
    sek?: number;
    usd?: number;
}
export declare class CreateVodAlt1RequestBodyBuy extends SpeakeasyBase {
    active?: boolean;
    download?: boolean;
    price?: CreateVodAlt1RequestBodyBuyPrice;
}
export declare enum CreateVodAlt1RequestBodyContentRatingEnum {
    Drugs = "drugs",
    Language = "language",
    Nudity = "nudity",
    Safe = "safe",
    Unrated = "unrated",
    Violence = "violence"
}
export declare class CreateVodAlt1RequestBodyEpisodesBuyPrice extends SpeakeasyBase {
    usd?: number;
}
export declare class CreateVodAlt1RequestBodyEpisodesBuy extends SpeakeasyBase {
    active?: boolean;
    download?: boolean;
    price?: CreateVodAlt1RequestBodyEpisodesBuyPrice;
}
export declare enum CreateVodAlt1RequestBodyEpisodesRentPeriodEnum {
    OneWeek = "1 week",
    OneYear = "1 year",
    TwentyFourHour = "24 hour",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SeventyTwoHour = "72 hour"
}
export declare class CreateVodAlt1RequestBodyEpisodesRentPrice extends SpeakeasyBase {
    usd?: number;
}
export declare class CreateVodAlt1RequestBodyEpisodesRent extends SpeakeasyBase {
    active?: boolean;
    period?: CreateVodAlt1RequestBodyEpisodesRentPeriodEnum;
    price?: CreateVodAlt1RequestBodyEpisodesRentPrice;
}
export declare class CreateVodAlt1RequestBodyEpisodes extends SpeakeasyBase {
    buy?: CreateVodAlt1RequestBodyEpisodesBuy;
    rent?: CreateVodAlt1RequestBodyEpisodesRent;
}
export declare enum CreateVodAlt1RequestBodyRentPeriodEnum {
    OneWeek = "1 week",
    OneYear = "1 year",
    TwentyFourHour = "24 hour",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SeventyTwoHour = "72 hour"
}
export declare class CreateVodAlt1RequestBodyRentPrice extends SpeakeasyBase {
    aud?: number;
    cad?: number;
    chf?: number;
    dkk?: number;
    eur?: number;
    gbp?: number;
    jpy?: number;
    krw?: number;
    nok?: number;
    pln?: number;
    sek?: number;
    usd?: number;
}
export declare class CreateVodAlt1RequestBodyRent extends SpeakeasyBase {
    active?: boolean;
    period?: CreateVodAlt1RequestBodyRentPeriodEnum;
    price?: CreateVodAlt1RequestBodyRentPrice;
}
export declare class CreateVodAlt1RequestBodySubscriptionMonthlyPrice extends SpeakeasyBase {
    usd?: number;
}
export declare class CreateVodAlt1RequestBodySubscriptionMonthly extends SpeakeasyBase {
    active?: boolean;
    price?: CreateVodAlt1RequestBodySubscriptionMonthlyPrice;
}
export declare class CreateVodAlt1RequestBodySubscription extends SpeakeasyBase {
    monthly?: CreateVodAlt1RequestBodySubscriptionMonthly;
}
export declare enum CreateVodAlt1RequestBodyTypeEnum {
    Film = "film",
    Series = "series"
}
export declare class CreateVodAlt1RequestBody extends SpeakeasyBase {
    acceptedCurrencies?: CreateVodAlt1RequestBodyAcceptedCurrenciesEnum;
    buy?: CreateVodAlt1RequestBodyBuy;
    contentRating: CreateVodAlt1RequestBodyContentRatingEnum;
    description: string;
    domainLink?: string;
    episodes?: CreateVodAlt1RequestBodyEpisodes;
    link?: string;
    name: string;
    rent?: CreateVodAlt1RequestBodyRent;
    subscription?: CreateVodAlt1RequestBodySubscription;
    type: CreateVodAlt1RequestBodyTypeEnum;
}
export declare class CreateVodAlt1Request extends SpeakeasyBase {
    request: CreateVodAlt1RequestBody;
}
export declare class CreateVodAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onDemandPage?: shared.OnDemandPage;
}
