import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateVodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum CreateVodRequestBodyAcceptedCurrenciesEnum {
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


export class CreateVodRequestBodyBuyPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AUD" })
  aud?: number;

  @SpeakeasyMetadata({ data: "json, name=CAD" })
  cad?: number;

  @SpeakeasyMetadata({ data: "json, name=CHF" })
  chf?: number;

  @SpeakeasyMetadata({ data: "json, name=DKK" })
  dkk?: number;

  @SpeakeasyMetadata({ data: "json, name=EUR" })
  eur?: number;

  @SpeakeasyMetadata({ data: "json, name=GBP" })
  gbp?: number;

  @SpeakeasyMetadata({ data: "json, name=JPY" })
  jpy?: number;

  @SpeakeasyMetadata({ data: "json, name=KRW" })
  krw?: number;

  @SpeakeasyMetadata({ data: "json, name=NOK" })
  nok?: number;

  @SpeakeasyMetadata({ data: "json, name=PLN" })
  pln?: number;

  @SpeakeasyMetadata({ data: "json, name=SEK" })
  sek?: number;

  @SpeakeasyMetadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodRequestBodyBuy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: CreateVodRequestBodyBuyPrice;
}

export enum CreateVodRequestBodyContentRatingEnum {
    Drugs = "drugs",
    Language = "language",
    Nudity = "nudity",
    Safe = "safe",
    Unrated = "unrated",
    Violence = "violence"
}


export class CreateVodRequestBodyEpisodesBuyPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodRequestBodyEpisodesBuy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: CreateVodRequestBodyEpisodesBuyPrice;
}

export enum CreateVodRequestBodyEpisodesRentPeriodEnum {
    OneWeek = "1 week",
    OneYear = "1 year",
    TwentyFourHour = "24 hour",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SeventyTwoHour = "72 hour"
}


export class CreateVodRequestBodyEpisodesRentPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodRequestBodyEpisodesRent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: CreateVodRequestBodyEpisodesRentPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: CreateVodRequestBodyEpisodesRentPrice;
}


export class CreateVodRequestBodyEpisodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buy" })
  buy?: CreateVodRequestBodyEpisodesBuy;

  @SpeakeasyMetadata({ data: "json, name=rent" })
  rent?: CreateVodRequestBodyEpisodesRent;
}

export enum CreateVodRequestBodyRentPeriodEnum {
    OneWeek = "1 week",
    OneYear = "1 year",
    TwentyFourHour = "24 hour",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SeventyTwoHour = "72 hour"
}


export class CreateVodRequestBodyRentPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AUD" })
  aud?: number;

  @SpeakeasyMetadata({ data: "json, name=CAD" })
  cad?: number;

  @SpeakeasyMetadata({ data: "json, name=CHF" })
  chf?: number;

  @SpeakeasyMetadata({ data: "json, name=DKK" })
  dkk?: number;

  @SpeakeasyMetadata({ data: "json, name=EUR" })
  eur?: number;

  @SpeakeasyMetadata({ data: "json, name=GBP" })
  gbp?: number;

  @SpeakeasyMetadata({ data: "json, name=JPY" })
  jpy?: number;

  @SpeakeasyMetadata({ data: "json, name=KRW" })
  krw?: number;

  @SpeakeasyMetadata({ data: "json, name=NOK" })
  nok?: number;

  @SpeakeasyMetadata({ data: "json, name=PLN" })
  pln?: number;

  @SpeakeasyMetadata({ data: "json, name=SEK" })
  sek?: number;

  @SpeakeasyMetadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodRequestBodyRent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: CreateVodRequestBodyRentPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: CreateVodRequestBodyRentPrice;
}


export class CreateVodRequestBodySubscriptionMonthlyPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodRequestBodySubscriptionMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: CreateVodRequestBodySubscriptionMonthlyPrice;
}


export class CreateVodRequestBodySubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monthly" })
  monthly?: CreateVodRequestBodySubscriptionMonthly;
}

export enum CreateVodRequestBodyTypeEnum {
    Film = "film",
    Series = "series"
}


export class CreateVodRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accepted_currencies" })
  acceptedCurrencies?: CreateVodRequestBodyAcceptedCurrenciesEnum;

  @SpeakeasyMetadata({ data: "json, name=buy" })
  buy?: CreateVodRequestBodyBuy;

  @SpeakeasyMetadata({ data: "json, name=content_rating" })
  contentRating: CreateVodRequestBodyContentRatingEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=domain_link" })
  domainLink?: string;

  @SpeakeasyMetadata({ data: "json, name=episodes" })
  episodes?: CreateVodRequestBodyEpisodes;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rent" })
  rent?: CreateVodRequestBodyRent;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: CreateVodRequestBodySubscription;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateVodRequestBodyTypeEnum;
}


export class CreateVodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateVodPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateVodRequestBody;
}


export class CreateVodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onDemandPage?: shared.OnDemandPage;
}
