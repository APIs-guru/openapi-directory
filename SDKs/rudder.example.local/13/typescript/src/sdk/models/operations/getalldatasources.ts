import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAllDataSources200ApplicationJsonActionEnum {
    GetAllDataSources = "getAllDataSources"
}


export class GetAllDataSources200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasources", elemType: shared.Datasource })
  datasources: shared.Datasource[];
}

export enum GetAllDataSources200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetAllDataSources200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetAllDataSources200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetAllDataSources200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetAllDataSources200ApplicationJsonResultEnum;
}


export class GetAllDataSourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAllDataSources200ApplicationJsonObject?: GetAllDataSources200ApplicationJson;
}
