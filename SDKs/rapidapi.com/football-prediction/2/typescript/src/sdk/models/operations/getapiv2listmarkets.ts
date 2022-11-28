import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiV2ListMarketsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-RapidApi-Key" })
  xRapidApiKey?: string;
}


export class GetApiV2ListMarkets200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all" })
  all?: string[];

  @SpeakeasyMetadata({ data: "json, name=allowed_for_your_subscription" })
  allowedForYourSubscription?: string[];
}


export class GetApiV2ListMarkets200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetApiV2ListMarkets200ApplicationJsonData;
}


export class GetApiV2ListMarkets404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;
}


export class GetApiV2ListMarketsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetApiV2ListMarketsHeaders;
}


export class GetApiV2ListMarketsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getApiV2ListMarkets200ApplicationJsonObject?: GetApiV2ListMarkets200ApplicationJson;

  @SpeakeasyMetadata()
  getApiV2ListMarkets404ApplicationJsonObject?: GetApiV2ListMarkets404ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
