import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum {
    ReloadAllDatasourcesAllNodes = "ReloadAllDatasourcesAllNodes"
}

export enum ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ReloadAllDatasourcesAllNodes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: string;

  @Metadata({ data: "json, name=result" })
  result: ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum;
}


export class ReloadAllDatasourcesAllNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  reloadAllDatasourcesAllNodes200ApplicationJsonObject?: ReloadAllDatasourcesAllNodes200ApplicationJson;

  @Metadata()
  statusCode: number;
}
