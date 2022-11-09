import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddVideoToVodPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class AddVideoToVodRequestBodyBuyPrice extends SpeakeasyBase {
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


export class AddVideoToVodRequestBodyBuy extends SpeakeasyBase {
  @Metadata({ data: "json, name=price" })
  price?: AddVideoToVodRequestBodyBuyPrice;
}


export class AddVideoToVodRequestBodyRentPrice extends SpeakeasyBase {
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


export class AddVideoToVodRequestBodyRent extends SpeakeasyBase {
  @Metadata({ data: "json, name=price" })
  price?: AddVideoToVodRequestBodyRentPrice;
}

export enum AddVideoToVodRequestBodyTypeEnum {
    Extra = "extra"
,    Main = "main"
,    Trailer = "trailer"
}


export class AddVideoToVodRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=buy" })
  buy?: AddVideoToVodRequestBodyBuy;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=release_year" })
  releaseYear?: number;

  @Metadata({ data: "json, name=rent" })
  rent?: AddVideoToVodRequestBodyRent;

  @Metadata({ data: "json, name=type" })
  type: AddVideoToVodRequestBodyTypeEnum;
}


export class AddVideoToVodSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddVideoToVodRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddVideoToVodPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.ondemand.video+json" })
  request: AddVideoToVodRequestBody;

  @Metadata()
  security: AddVideoToVodSecurity;
}


export class AddVideoToVodResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  onDemandVideo?: shared.OnDemandVideo;
}
