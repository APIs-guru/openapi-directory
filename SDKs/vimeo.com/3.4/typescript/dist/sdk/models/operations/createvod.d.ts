import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVodPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum CreateVodRequestBodyAcceptedCurrenciesEnum {
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
export declare class CreateVodRequestBodyBuyPrice extends SpeakeasyBase {
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
export declare class CreateVodRequestBodyBuy extends SpeakeasyBase {
    active?: boolean;
    download?: boolean;
    price?: CreateVodRequestBodyBuyPrice;
}
export declare enum CreateVodRequestBodyContentRatingEnum {
    Drugs = "drugs",
    Language = "language",
    Nudity = "nudity",
    Safe = "safe",
    Unrated = "unrated",
    Violence = "violence"
}
export declare class CreateVodRequestBodyEpisodesBuyPrice extends SpeakeasyBase {
    usd?: number;
}
export declare class CreateVodRequestBodyEpisodesBuy extends SpeakeasyBase {
    active?: boolean;
    download?: boolean;
    price?: CreateVodRequestBodyEpisodesBuyPrice;
}
export declare enum CreateVodRequestBodyEpisodesRentPeriodEnum {
    OneWeek = "1 week",
    OneYear = "1 year",
    TwentyFourHour = "24 hour",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SeventyTwoHour = "72 hour"
}
export declare class CreateVodRequestBodyEpisodesRentPrice extends SpeakeasyBase {
    usd?: number;
}
export declare class CreateVodRequestBodyEpisodesRent extends SpeakeasyBase {
    active?: boolean;
    period?: CreateVodRequestBodyEpisodesRentPeriodEnum;
    price?: CreateVodRequestBodyEpisodesRentPrice;
}
export declare class CreateVodRequestBodyEpisodes extends SpeakeasyBase {
    buy?: CreateVodRequestBodyEpisodesBuy;
    rent?: CreateVodRequestBodyEpisodesRent;
}
export declare enum CreateVodRequestBodyRentPeriodEnum {
    OneWeek = "1 week",
    OneYear = "1 year",
    TwentyFourHour = "24 hour",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SeventyTwoHour = "72 hour"
}
export declare class CreateVodRequestBodyRentPrice extends SpeakeasyBase {
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
export declare class CreateVodRequestBodyRent extends SpeakeasyBase {
    active?: boolean;
    period?: CreateVodRequestBodyRentPeriodEnum;
    price?: CreateVodRequestBodyRentPrice;
}
export declare class CreateVodRequestBodySubscriptionMonthlyPrice extends SpeakeasyBase {
    usd?: number;
}
export declare class CreateVodRequestBodySubscriptionMonthly extends SpeakeasyBase {
    active?: boolean;
    price?: CreateVodRequestBodySubscriptionMonthlyPrice;
}
export declare class CreateVodRequestBodySubscription extends SpeakeasyBase {
    monthly?: CreateVodRequestBodySubscriptionMonthly;
}
export declare enum CreateVodRequestBodyTypeEnum {
    Film = "film",
    Series = "series"
}
export declare class CreateVodRequestBody extends SpeakeasyBase {
    acceptedCurrencies?: CreateVodRequestBodyAcceptedCurrenciesEnum;
    buy?: CreateVodRequestBodyBuy;
    contentRating: CreateVodRequestBodyContentRatingEnum;
    description: string;
    domainLink?: string;
    episodes?: CreateVodRequestBodyEpisodes;
    link?: string;
    name: string;
    rent?: CreateVodRequestBodyRent;
    subscription?: CreateVodRequestBodySubscription;
    type: CreateVodRequestBodyTypeEnum;
}
export declare class CreateVodRequest extends SpeakeasyBase {
    pathParams: CreateVodPathParams;
    request: CreateVodRequestBody;
}
export declare class CreateVodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onDemandPage?: shared.OnDemandPage;
}
