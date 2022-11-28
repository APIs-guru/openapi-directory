import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAllDataSources200ApplicationJsonActionEnum {
    GetAllDataSources = "getAllDataSources"
}


export class GetAllDataSources200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasources", elemType: shared.Datasource })
  datasources: shared.Datasource[];
}

export enum GetAllDataSources200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetAllDataSources200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetAllDataSources200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetAllDataSources200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetAllDataSources200ApplicationJsonResultEnum;
}


export class GetAllDataSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllDataSources200ApplicationJsonObject?: GetAllDataSources200ApplicationJson;
}
