import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVodPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum CreateVodRequestBodyAcceptedCurrenciesEnum {
    Aud = "AUD"
,    Cad = "CAD"
,    Chf = "CHF"
,    Dkk = "DKK"
,    Eur = "EUR"
,    Gbp = "GBP"
,    Jpy = "JPY"
,    Krw = "KRW"
,    Nok = "NOK"
,    Pln = "PLN"
,    Sek = "SEK"
,    Usd = "USD"
}


export class CreateVodRequestBodyBuyPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=AUD" })
  aud?: number;

  @Metadata({ data: "json, name=CAD" })
  cad?: number;

  @Metadata({ data: "json, name=CHF" })
  chf?: number;

  @Metadata({ data: "json, name=DKK" })
  dkk?: number;

  @Metadata({ data: "json, name=EUR" })
  eur?: number;

  @Metadata({ data: "json, name=GBP" })
  gbp?: number;

  @Metadata({ data: "json, name=JPY" })
  jpy?: number;

  @Metadata({ data: "json, name=KRW" })
  krw?: number;

  @Metadata({ data: "json, name=NOK" })
  nok?: number;

  @Metadata({ data: "json, name=PLN" })
  pln?: number;

  @Metadata({ data: "json, name=SEK" })
  sek?: number;

  @Metadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodRequestBodyBuy extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=price" })
  price?: CreateVodRequestBodyBuyPrice;
}

export enum CreateVodRequestBodyContentRatingEnum {
    Drugs = "drugs"
,    Language = "language"
,    Nudity = "nudity"
,    Safe = "safe"
,    Unrated = "unrated"
,    Violence = "violence"
}


export class CreateVodRequestBodyEpisodesBuyPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodRequestBodyEpisodesBuy extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=price" })
  price?: CreateVodRequestBodyEpisodesBuyPrice;
}

export enum CreateVodRequestBodyEpisodesRentPeriodEnum {
    OneWeek = "1 week"
,    OneYear = "1 year"
,    TwentyFourHour = "24 hour"
,    ThreeMonth = "3 month"
,    ThirtyDay = "30 day"
,    FortyEightHour = "48 hour"
,    SixMonth = "6 month"
,    SeventyTwoHour = "72 hour"
}


export class CreateVodRequestBodyEpisodesRentPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodRequestBodyEpisodesRent extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=period" })
  period?: CreateVodRequestBodyEpisodesRentPeriodEnum;

  @Metadata({ data: "json, name=price" })
  price?: CreateVodRequestBodyEpisodesRentPrice;
}


export class CreateVodRequestBodyEpisodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=buy" })
  buy?: CreateVodRequestBodyEpisodesBuy;

  @Metadata({ data: "json, name=rent" })
  rent?: CreateVodRequestBodyEpisodesRent;
}

export enum CreateVodRequestBodyRentPeriodEnum {
    OneWeek = "1 week"
,    OneYear = "1 year"
,    TwentyFourHour = "24 hour"
,    ThreeMonth = "3 month"
,    ThirtyDay = "30 day"
,    FortyEightHour = "48 hour"
,    SixMonth = "6 month"
,    SeventyTwoHour = "72 hour"
}


export class CreateVodRequestBodyRentPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=AUD" })
  aud?: number;

  @Metadata({ data: "json, name=CAD" })
  cad?: number;

  @Metadata({ data: "json, name=CHF" })
  chf?: number;

  @Metadata({ data: "json, name=DKK" })
  dkk?: number;

  @Metadata({ data: "json, name=EUR" })
  eur?: number;

  @Metadata({ data: "json, name=GBP" })
  gbp?: number;

  @Metadata({ data: "json, name=JPY" })
  jpy?: number;

  @Metadata({ data: "json, name=KRW" })
  krw?: number;

  @Metadata({ data: "json, name=NOK" })
  nok?: number;

  @Metadata({ data: "json, name=PLN" })
  pln?: number;

  @Metadata({ data: "json, name=SEK" })
  sek?: number;

  @Metadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodRequestBodyRent extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=period" })
  period?: CreateVodRequestBodyRentPeriodEnum;

  @Metadata({ data: "json, name=price" })
  price?: CreateVodRequestBodyRentPrice;
}


export class CreateVodRequestBodySubscriptionMonthlyPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodRequestBodySubscriptionMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=price" })
  price?: CreateVodRequestBodySubscriptionMonthlyPrice;
}


export class CreateVodRequestBodySubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=monthly" })
  monthly?: CreateVodRequestBodySubscriptionMonthly;
}

export enum CreateVodRequestBodyTypeEnum {
    Film = "film"
,    Series = "series"
}


export class CreateVodRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accepted_currencies" })
  acceptedCurrencies?: CreateVodRequestBodyAcceptedCurrenciesEnum;

  @Metadata({ data: "json, name=buy" })
  buy?: CreateVodRequestBodyBuy;

  @Metadata({ data: "json, name=content_rating" })
  contentRating: CreateVodRequestBodyContentRatingEnum;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=domain_link" })
  domainLink?: string;

  @Metadata({ data: "json, name=episodes" })
  episodes?: CreateVodRequestBodyEpisodes;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rent" })
  rent?: CreateVodRequestBodyRent;

  @Metadata({ data: "json, name=subscription" })
  subscription?: CreateVodRequestBodySubscription;

  @Metadata({ data: "json, name=type" })
  type: CreateVodRequestBodyTypeEnum;
}


export class CreateVodRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateVodPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateVodRequestBody;
}


export class CreateVodResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  onDemandPage?: shared.OnDemandPage;
}
