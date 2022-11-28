import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum {
    ReloadAllDatasourcesAllNodes = "ReloadAllDatasourcesAllNodes"
}

export enum ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ReloadAllDatasourcesAllNodes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum;
}


export class ReloadAllDatasourcesAllNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  reloadAllDatasourcesAllNodes200ApplicationJsonObject?: ReloadAllDatasourcesAllNodes200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
