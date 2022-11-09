import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCveCheckConfiguration200ApplicationJsonActionEnum {
    GetCveCheckConfiguration = "getCVECheckConfiguration"
}


export class GetCveCheckConfiguration200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

export enum GetCveCheckConfiguration200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetCveCheckConfiguration200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetCveCheckConfiguration200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetCveCheckConfiguration200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetCveCheckConfiguration200ApplicationJsonResultEnum;
}


export class GetCveCheckConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getCveCheckConfiguration200ApplicationJsonObject?: GetCveCheckConfiguration200ApplicationJson;
}
