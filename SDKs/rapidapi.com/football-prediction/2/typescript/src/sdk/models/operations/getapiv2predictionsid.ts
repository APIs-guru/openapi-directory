import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiV2PredictionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiV2PredictionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV2PredictionsIdPathParams;
}


export class GetApiV2PredictionsId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>[];
}


export class GetApiV2PredictionsId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;
}


export class GetApiV2PredictionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getApiV2PredictionsId200ApplicationJsonObject?: GetApiV2PredictionsId200ApplicationJson;

  @Metadata()
  getApiV2PredictionsId404ApplicationJsonObject?: GetApiV2PredictionsId404ApplicationJson;

  @Metadata()
  statusCode: number;
}
