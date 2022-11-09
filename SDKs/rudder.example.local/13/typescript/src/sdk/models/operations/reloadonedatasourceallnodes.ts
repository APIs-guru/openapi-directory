import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReloadOneDatasourceAllNodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasourceId" })
  datasourceId: string;
}


export class ReloadOneDatasourceAllNodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReloadOneDatasourceAllNodesPathParams;
}

export enum ReloadOneDatasourceAllNodes200ApplicationJsonActionEnum {
    ReloadOneDatasourceAllNodes = "ReloadOneDatasourceAllNodes"
}

export enum ReloadOneDatasourceAllNodes200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ReloadOneDatasourceAllNodes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ReloadOneDatasourceAllNodes200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: string;

  @Metadata({ data: "json, name=result" })
  result: ReloadOneDatasourceAllNodes200ApplicationJsonResultEnum;
}


export class ReloadOneDatasourceAllNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  reloadOneDatasourceAllNodes200ApplicationJsonObject?: ReloadOneDatasourceAllNodes200ApplicationJson;

  @Metadata()
  statusCode: number;
}
