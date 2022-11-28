import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCveCheckConfiguration200ApplicationJsonActionEnum {
    GetCveCheckConfiguration = "getCVECheckConfiguration"
}


export class GetCveCheckConfiguration200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export enum GetCveCheckConfiguration200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetCveCheckConfiguration200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetCveCheckConfiguration200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetCveCheckConfiguration200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetCveCheckConfiguration200ApplicationJsonResultEnum;
}


export class GetCveCheckConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCveCheckConfiguration200ApplicationJsonObject?: GetCveCheckConfiguration200ApplicationJson;
}
