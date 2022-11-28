import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReloadOneDatasourceAllNodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasourceId" })
  datasourceId: string;
}

export enum ReloadOneDatasourceAllNodes200ApplicationJsonActionEnum {
    ReloadOneDatasourceAllNodes = "ReloadOneDatasourceAllNodes"
}

export enum ReloadOneDatasourceAllNodes200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ReloadOneDatasourceAllNodes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ReloadOneDatasourceAllNodes200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ReloadOneDatasourceAllNodes200ApplicationJsonResultEnum;
}


export class ReloadOneDatasourceAllNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReloadOneDatasourceAllNodesPathParams;
}


export class ReloadOneDatasourceAllNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  reloadOneDatasourceAllNodes200ApplicationJsonObject?: ReloadOneDatasourceAllNodes200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
