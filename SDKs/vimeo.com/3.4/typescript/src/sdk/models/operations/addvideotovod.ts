import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddVideoToVodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class AddVideoToVodRequestBodyBuyPrice extends SpeakeasyBase {
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


export class AddVideoToVodRequestBodyBuy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: AddVideoToVodRequestBodyBuyPrice;
}


export class AddVideoToVodRequestBodyRentPrice extends SpeakeasyBase {
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


export class AddVideoToVodRequestBodyRent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: AddVideoToVodRequestBodyRentPrice;
}

export enum AddVideoToVodRequestBodyTypeEnum {
    Extra = "extra",
    Main = "main",
    Trailer = "trailer"
}


export class AddVideoToVodRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buy" })
  buy?: AddVideoToVodRequestBodyBuy;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=release_year" })
  releaseYear?: number;

  @SpeakeasyMetadata({ data: "json, name=rent" })
  rent?: AddVideoToVodRequestBodyRent;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: AddVideoToVodRequestBodyTypeEnum;
}


export class AddVideoToVodSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddVideoToVodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddVideoToVodPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.ondemand.video+json" })
  request: AddVideoToVodRequestBody;

  @SpeakeasyMetadata()
  security: AddVideoToVodSecurity;
}


export class AddVideoToVodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  onDemandVideo?: shared.OnDemandVideo;
}
