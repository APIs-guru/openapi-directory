import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDataSourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasourceId" })
  datasourceId: string;
}


export class DeleteDataSourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDataSourcePathParams;
}

export enum DeleteDataSource200ApplicationJsonActionEnum {
    DeleteDataSource = "deleteDataSource"
}


export class DeleteDataSource200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasources", elemType: shared.Datasource })
  datasources: shared.Datasource[];
}

export enum DeleteDataSource200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class DeleteDataSource200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: DeleteDataSource200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: DeleteDataSource200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: DeleteDataSource200ApplicationJsonResultEnum;
}


export class DeleteDataSourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteDataSource200ApplicationJsonObject?: DeleteDataSource200ApplicationJson;
}
