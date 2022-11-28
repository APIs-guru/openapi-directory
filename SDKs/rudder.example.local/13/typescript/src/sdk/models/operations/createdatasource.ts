import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateDataSource200ApplicationJsonActionEnum {
    CreateDataSource = "createDataSource"
}


// CreateDataSource200ApplicationJsonData
/** 
 * Information about the data sources
**/
export class CreateDataSource200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasources", elemType: shared.Datasource })
  datasources: shared.Datasource[];
}

export enum CreateDataSource200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class CreateDataSource200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CreateDataSource200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CreateDataSource200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: CreateDataSource200ApplicationJsonResultEnum;
}


export class CreateDataSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Datasource;
}


export class CreateDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createDataSource200ApplicationJsonObject?: CreateDataSource200ApplicationJson;
}
