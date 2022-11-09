import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDataSourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasourceId" })
  datasourceId: string;
}


export class GetDataSourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDataSourcePathParams;
}

export enum GetDataSource200ApplicationJsonActionEnum {
    GetDataSource = "getDataSource"
}


export class GetDataSource200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasources", elemType: shared.Datasource })
  datasources: shared.Datasource[];
}

export enum GetDataSource200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetDataSource200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetDataSource200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetDataSource200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: GetDataSource200ApplicationJsonResultEnum;
}


export class GetDataSourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDataSource200ApplicationJsonObject?: GetDataSource200ApplicationJson;
}
