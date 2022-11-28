import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiV2ListFederationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-RapidApi-Key" })
  xRapidApiKey?: string;
}


export class GetApiV2ListFederations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string[];
}


export class GetApiV2ListFederations404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;
}


export class GetApiV2ListFederationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetApiV2ListFederationsHeaders;
}


export class GetApiV2ListFederationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getApiV2ListFederations200ApplicationJsonObject?: GetApiV2ListFederations200ApplicationJson;

  @SpeakeasyMetadata()
  getApiV2ListFederations404ApplicationJsonObject?: GetApiV2ListFederations404ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
