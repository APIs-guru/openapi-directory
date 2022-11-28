import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiV2PredictionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiV2PredictionsId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>[];
}


export class GetApiV2PredictionsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;
}


export class GetApiV2PredictionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV2PredictionsIdPathParams;
}


export class GetApiV2PredictionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getApiV2PredictionsId200ApplicationJsonObject?: GetApiV2PredictionsId200ApplicationJson;

  @SpeakeasyMetadata()
  getApiV2PredictionsId404ApplicationJsonObject?: GetApiV2PredictionsId404ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
