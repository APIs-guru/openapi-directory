import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiV2ListMarketsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-RapidApi-Key" })
  xRapidApiKey?: string;
}


export class GetApiV2ListMarketsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetApiV2ListMarketsHeaders;
}


export class GetApiV2ListMarkets200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=all" })
  all?: string[];

  @Metadata({ data: "json, name=allowed_for_your_subscription" })
  allowedForYourSubscription?: string[];
}


export class GetApiV2ListMarkets200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: GetApiV2ListMarkets200ApplicationJsonData;
}


export class GetApiV2ListMarkets404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;
}


export class GetApiV2ListMarketsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getApiV2ListMarkets200ApplicationJsonObject?: GetApiV2ListMarkets200ApplicationJson;

  @Metadata()
  getApiV2ListMarkets404ApplicationJsonObject?: GetApiV2ListMarkets404ApplicationJson;

  @Metadata()
  statusCode: number;
}
