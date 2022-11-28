import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListParameters200ApplicationJsonActionEnum {
    ListParameters = "listParameters"
}


// ListParameters200ApplicationJsonData
/** 
 * Parameters
**/
export class ListParameters200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: shared.Parameter })
  parameters: shared.Parameter[];
}

export enum ListParameters200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ListParameters200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ListParameters200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ListParameters200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ListParameters200ApplicationJsonResultEnum;
}


export class ListParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listParameters200ApplicationJsonObject?: ListParameters200ApplicationJson;
}
