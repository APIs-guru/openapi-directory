import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiV2ListFederationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-RapidApi-Key" })
  xRapidApiKey?: string;
}


export class GetApiV2ListFederationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetApiV2ListFederationsHeaders;
}


export class GetApiV2ListFederations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string[];
}


export class GetApiV2ListFederations404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;
}


export class GetApiV2ListFederationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getApiV2ListFederations200ApplicationJsonObject?: GetApiV2ListFederations200ApplicationJson;

  @Metadata()
  getApiV2ListFederations404ApplicationJsonObject?: GetApiV2ListFederations404ApplicationJson;

  @Metadata()
  statusCode: number;
}
