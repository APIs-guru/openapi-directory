import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDataSourceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Datasource;
}

export enum CreateDataSource200ApplicationJsonActionEnum {
    CreateDataSource = "createDataSource"
}


// CreateDataSource200ApplicationJsonData
/** 
 * Information about the data sources
**/
export class CreateDataSource200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasources", elemType: shared.Datasource })
  datasources: shared.Datasource[];
}

export enum CreateDataSource200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class CreateDataSource200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: CreateDataSource200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: CreateDataSource200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: CreateDataSource200ApplicationJsonResultEnum;
}


export class CreateDataSourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createDataSource200ApplicationJsonObject?: CreateDataSource200ApplicationJson;
}
