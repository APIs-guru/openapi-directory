import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListParameters200ApplicationJsonActionEnum {
    ListParameters = "listParameters"
}


// ListParameters200ApplicationJsonData
/** 
 * Parameters
**/
export class ListParameters200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters", elemType: shared.Parameter })
  parameters: shared.Parameter[];
}

export enum ListParameters200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ListParameters200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ListParameters200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ListParameters200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ListParameters200ApplicationJsonResultEnum;
}


export class ListParametersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listParameters200ApplicationJsonObject?: ListParameters200ApplicationJson;
}
