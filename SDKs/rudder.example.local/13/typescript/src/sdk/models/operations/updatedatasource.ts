import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDataSourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasourceId" })
  datasourceId: string;
}

export enum UpdateDataSource200ApplicationJsonActionEnum {
    UpdateDataSource = "updateDataSource"
}


export class UpdateDataSource200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasources", elemType: shared.Datasource })
  datasources: shared.Datasource[];
}

export enum UpdateDataSource200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdateDataSource200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateDataSource200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdateDataSource200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdateDataSource200ApplicationJsonResultEnum;
}


export class UpdateDataSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDataSourcePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Datasource;
}


export class UpdateDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDataSource200ApplicationJsonObject?: UpdateDataSource200ApplicationJson;
}
