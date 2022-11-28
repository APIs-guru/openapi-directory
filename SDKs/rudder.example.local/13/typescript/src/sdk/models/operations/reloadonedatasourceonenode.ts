import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReloadOneDatasourceOneNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasourceId" })
  datasourceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}

export enum ReloadOneDatasourceOneNode200ApplicationJsonActionEnum {
    ReloadOneDatasourceOneNode = "ReloadOneDatasourceOneNode"
}

export enum ReloadOneDatasourceOneNode200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ReloadOneDatasourceOneNode200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ReloadOneDatasourceOneNode200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ReloadOneDatasourceOneNode200ApplicationJsonResultEnum;
}


export class ReloadOneDatasourceOneNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReloadOneDatasourceOneNodePathParams;
}


export class ReloadOneDatasourceOneNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  reloadOneDatasourceOneNode200ApplicationJsonObject?: ReloadOneDatasourceOneNode200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
