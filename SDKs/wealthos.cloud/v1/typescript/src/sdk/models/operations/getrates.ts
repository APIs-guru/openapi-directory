import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetRatesRateTypeEnum {
    FxSpot = "fx-spot"
}


export class GetRatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rate_type" })
  rateType: GetRatesRateTypeEnum;
}


export class GetRatesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetRatesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetRates200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rates" })
  rates: any[];
}


export class GetRatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRatesPathParams;

  @SpeakeasyMetadata()
  headers: GetRatesHeaders;

  @SpeakeasyMetadata()
  security: GetRatesSecurity;
}


export class GetRatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRates200ApplicationJsonObject?: GetRates200ApplicationJson;

  @SpeakeasyMetadata()
  getRates401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getRates403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getRates404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getRates429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getRates500ApplicationJsonAny?: any;
}
