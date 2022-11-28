import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDataSourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasourceId" })
  datasourceId: string;
}

export enum GetDataSource200ApplicationJsonActionEnum {
    GetDataSource = "getDataSource"
}


export class GetDataSource200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasources", elemType: shared.Datasource })
  datasources: shared.Datasource[];
}

export enum GetDataSource200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetDataSource200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetDataSource200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetDataSource200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetDataSource200ApplicationJsonResultEnum;
}


export class GetDataSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataSourcePathParams;
}


export class GetDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDataSource200ApplicationJsonObject?: GetDataSource200ApplicationJson;
}
