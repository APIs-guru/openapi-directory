import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateVodAlt1RequestBodyAcceptedCurrenciesEnum {
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


export class CreateVodAlt1RequestBodyBuyPrice extends SpeakeasyBase {
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


export class CreateVodAlt1RequestBodyBuy extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=price" })
  price?: CreateVodAlt1RequestBodyBuyPrice;
}

export enum CreateVodAlt1RequestBodyContentRatingEnum {
    Drugs = "drugs"
,    Language = "language"
,    Nudity = "nudity"
,    Safe = "safe"
,    Unrated = "unrated"
,    Violence = "violence"
}


export class CreateVodAlt1RequestBodyEpisodesBuyPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodAlt1RequestBodyEpisodesBuy extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=price" })
  price?: CreateVodAlt1RequestBodyEpisodesBuyPrice;
}

export enum CreateVodAlt1RequestBodyEpisodesRentPeriodEnum {
    OneWeek = "1 week"
,    OneYear = "1 year"
,    TwentyFourHour = "24 hour"
,    ThreeMonth = "3 month"
,    ThirtyDay = "30 day"
,    FortyEightHour = "48 hour"
,    SixMonth = "6 month"
,    SeventyTwoHour = "72 hour"
}


export class CreateVodAlt1RequestBodyEpisodesRentPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodAlt1RequestBodyEpisodesRent extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=period" })
  period?: CreateVodAlt1RequestBodyEpisodesRentPeriodEnum;

  @Metadata({ data: "json, name=price" })
  price?: CreateVodAlt1RequestBodyEpisodesRentPrice;
}


export class CreateVodAlt1RequestBodyEpisodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=buy" })
  buy?: CreateVodAlt1RequestBodyEpisodesBuy;

  @Metadata({ data: "json, name=rent" })
  rent?: CreateVodAlt1RequestBodyEpisodesRent;
}

export enum CreateVodAlt1RequestBodyRentPeriodEnum {
    OneWeek = "1 week"
,    OneYear = "1 year"
,    TwentyFourHour = "24 hour"
,    ThreeMonth = "3 month"
,    ThirtyDay = "30 day"
,    FortyEightHour = "48 hour"
,    SixMonth = "6 month"
,    SeventyTwoHour = "72 hour"
}


export class CreateVodAlt1RequestBodyRentPrice extends SpeakeasyBase {
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


export class CreateVodAlt1RequestBodyRent extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=period" })
  period?: CreateVodAlt1RequestBodyRentPeriodEnum;

  @Metadata({ data: "json, name=price" })
  price?: CreateVodAlt1RequestBodyRentPrice;
}


export class CreateVodAlt1RequestBodySubscriptionMonthlyPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodAlt1RequestBodySubscriptionMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=price" })
  price?: CreateVodAlt1RequestBodySubscriptionMonthlyPrice;
}


export class CreateVodAlt1RequestBodySubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=monthly" })
  monthly?: CreateVodAlt1RequestBodySubscriptionMonthly;
}

export enum CreateVodAlt1RequestBodyTypeEnum {
    Film = "film"
,    Series = "series"
}


export class CreateVodAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accepted_currencies" })
  acceptedCurrencies?: CreateVodAlt1RequestBodyAcceptedCurrenciesEnum;

  @Metadata({ data: "json, name=buy" })
  buy?: CreateVodAlt1RequestBodyBuy;

  @Metadata({ data: "json, name=content_rating" })
  contentRating: CreateVodAlt1RequestBodyContentRatingEnum;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=domain_link" })
  domainLink?: string;

  @Metadata({ data: "json, name=episodes" })
  episodes?: CreateVodAlt1RequestBodyEpisodes;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rent" })
  rent?: CreateVodAlt1RequestBodyRent;

  @Metadata({ data: "json, name=subscription" })
  subscription?: CreateVodAlt1RequestBodySubscription;

  @Metadata({ data: "json, name=type" })
  type: CreateVodAlt1RequestBodyTypeEnum;
}


export class CreateVodAlt1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateVodAlt1RequestBody;
}


export class CreateVodAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  onDemandPage?: shared.OnDemandPage;
}
