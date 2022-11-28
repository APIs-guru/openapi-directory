import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiV2PredictionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-RapidApi-Key" })
  xRapidApiKey?: string;
}


export class GetApiV2Predictions404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;
}


export class GetApiV2PredictionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetApiV2PredictionsHeaders;
}


export class GetApiV2PredictionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getApiV2Predictions404ApplicationJsonObject?: GetApiV2Predictions404ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
