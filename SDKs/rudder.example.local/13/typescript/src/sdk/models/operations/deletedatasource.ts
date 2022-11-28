import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDataSourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasourceId" })
  datasourceId: string;
}

export enum DeleteDataSource200ApplicationJsonActionEnum {
    DeleteDataSource = "deleteDataSource"
}


export class DeleteDataSource200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasources", elemType: shared.Datasource })
  datasources: shared.Datasource[];
}

export enum DeleteDataSource200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class DeleteDataSource200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: DeleteDataSource200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: DeleteDataSource200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: DeleteDataSource200ApplicationJsonResultEnum;
}


export class DeleteDataSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDataSourcePathParams;
}


export class DeleteDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteDataSource200ApplicationJsonObject?: DeleteDataSource200ApplicationJson;
}
