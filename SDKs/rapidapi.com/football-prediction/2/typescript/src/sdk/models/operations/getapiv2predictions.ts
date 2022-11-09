import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiV2PredictionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-RapidApi-Key" })
  xRapidApiKey?: string;
}


export class GetApiV2PredictionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetApiV2PredictionsHeaders;
}


export class GetApiV2Predictions404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;
}


export class GetApiV2PredictionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getApiV2Predictions404ApplicationJsonObject?: GetApiV2Predictions404ApplicationJson;

  @Metadata()
  statusCode: number;
}
