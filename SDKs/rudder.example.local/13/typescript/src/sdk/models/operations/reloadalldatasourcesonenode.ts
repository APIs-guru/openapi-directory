import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReloadAllDatasourcesOneNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}

export enum ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum {
    ReloadAllDatasourcesOneNode = "ReloadAllDatasourcesOneNode"
}

export enum ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ReloadAllDatasourcesOneNode200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum;
}


export class ReloadAllDatasourcesOneNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReloadAllDatasourcesOneNodePathParams;
}


export class ReloadAllDatasourcesOneNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  reloadAllDatasourcesOneNode200ApplicationJsonObject?: ReloadAllDatasourcesOneNode200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
