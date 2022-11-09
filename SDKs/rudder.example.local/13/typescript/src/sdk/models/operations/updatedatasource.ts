import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDataSourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasourceId" })
  datasourceId: string;
}


export class UpdateDataSourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDataSourcePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Datasource;
}

export enum UpdateDataSource200ApplicationJsonActionEnum {
    UpdateDataSource = "updateDataSource"
}


export class UpdateDataSource200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasources", elemType: shared.Datasource })
  datasources: shared.Datasource[];
}

export enum UpdateDataSource200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateDataSource200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdateDataSource200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdateDataSource200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: UpdateDataSource200ApplicationJsonResultEnum;
}


export class UpdateDataSourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDataSource200ApplicationJsonObject?: UpdateDataSource200ApplicationJson;
}
