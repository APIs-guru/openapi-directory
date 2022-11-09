import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReloadOneDatasourceOneNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasourceId" })
  datasourceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class ReloadOneDatasourceOneNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReloadOneDatasourceOneNodePathParams;
}

export enum ReloadOneDatasourceOneNode200ApplicationJsonActionEnum {
    ReloadOneDatasourceOneNode = "ReloadOneDatasourceOneNode"
}

export enum ReloadOneDatasourceOneNode200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ReloadOneDatasourceOneNode200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ReloadOneDatasourceOneNode200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: string;

  @Metadata({ data: "json, name=result" })
  result: ReloadOneDatasourceOneNode200ApplicationJsonResultEnum;
}


export class ReloadOneDatasourceOneNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  reloadOneDatasourceOneNode200ApplicationJsonObject?: ReloadOneDatasourceOneNode200ApplicationJson;

  @Metadata()
  statusCode: number;
}
