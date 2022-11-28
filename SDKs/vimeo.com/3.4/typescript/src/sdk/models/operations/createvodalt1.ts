import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateVodAlt1RequestBodyAcceptedCurrenciesEnum {
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


export class CreateVodAlt1RequestBodyBuyPrice extends SpeakeasyBase {
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


export class CreateVodAlt1RequestBodyBuy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: CreateVodAlt1RequestBodyBuyPrice;
}

export enum CreateVodAlt1RequestBodyContentRatingEnum {
    Drugs = "drugs",
    Language = "language",
    Nudity = "nudity",
    Safe = "safe",
    Unrated = "unrated",
    Violence = "violence"
}


export class CreateVodAlt1RequestBodyEpisodesBuyPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodAlt1RequestBodyEpisodesBuy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: CreateVodAlt1RequestBodyEpisodesBuyPrice;
}

export enum CreateVodAlt1RequestBodyEpisodesRentPeriodEnum {
    OneWeek = "1 week",
    OneYear = "1 year",
    TwentyFourHour = "24 hour",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SeventyTwoHour = "72 hour"
}


export class CreateVodAlt1RequestBodyEpisodesRentPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodAlt1RequestBodyEpisodesRent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: CreateVodAlt1RequestBodyEpisodesRentPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: CreateVodAlt1RequestBodyEpisodesRentPrice;
}


export class CreateVodAlt1RequestBodyEpisodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buy" })
  buy?: CreateVodAlt1RequestBodyEpisodesBuy;

  @SpeakeasyMetadata({ data: "json, name=rent" })
  rent?: CreateVodAlt1RequestBodyEpisodesRent;
}

export enum CreateVodAlt1RequestBodyRentPeriodEnum {
    OneWeek = "1 week",
    OneYear = "1 year",
    TwentyFourHour = "24 hour",
    ThreeMonth = "3 month",
    ThirtyDay = "30 day",
    FortyEightHour = "48 hour",
    SixMonth = "6 month",
    SeventyTwoHour = "72 hour"
}


export class CreateVodAlt1RequestBodyRentPrice extends SpeakeasyBase {
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


export class CreateVodAlt1RequestBodyRent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: CreateVodAlt1RequestBodyRentPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: CreateVodAlt1RequestBodyRentPrice;
}


export class CreateVodAlt1RequestBodySubscriptionMonthlyPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=USD" })
  usd?: number;
}


export class CreateVodAlt1RequestBodySubscriptionMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: CreateVodAlt1RequestBodySubscriptionMonthlyPrice;
}


export class CreateVodAlt1RequestBodySubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monthly" })
  monthly?: CreateVodAlt1RequestBodySubscriptionMonthly;
}

export enum CreateVodAlt1RequestBodyTypeEnum {
    Film = "film",
    Series = "series"
}


export class CreateVodAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accepted_currencies" })
  acceptedCurrencies?: CreateVodAlt1RequestBodyAcceptedCurrenciesEnum;

  @SpeakeasyMetadata({ data: "json, name=buy" })
  buy?: CreateVodAlt1RequestBodyBuy;

  @SpeakeasyMetadata({ data: "json, name=content_rating" })
  contentRating: CreateVodAlt1RequestBodyContentRatingEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=domain_link" })
  domainLink?: string;

  @SpeakeasyMetadata({ data: "json, name=episodes" })
  episodes?: CreateVodAlt1RequestBodyEpisodes;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rent" })
  rent?: CreateVodAlt1RequestBodyRent;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: CreateVodAlt1RequestBodySubscription;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateVodAlt1RequestBodyTypeEnum;
}


export class CreateVodAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateVodAlt1RequestBody;
}


export class CreateVodAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onDemandPage?: shared.OnDemandPage;
}
