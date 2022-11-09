import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReloadAllDatasourcesOneNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class ReloadAllDatasourcesOneNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReloadAllDatasourcesOneNodePathParams;
}

export enum ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum {
    ReloadAllDatasourcesOneNode = "ReloadAllDatasourcesOneNode"
}

export enum ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ReloadAllDatasourcesOneNode200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: string;

  @Metadata({ data: "json, name=result" })
  result: ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum;
}


export class ReloadAllDatasourcesOneNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  reloadAllDatasourcesOneNode200ApplicationJsonObject?: ReloadAllDatasourcesOneNode200ApplicationJson;

  @Metadata()
  statusCode: number;
}
