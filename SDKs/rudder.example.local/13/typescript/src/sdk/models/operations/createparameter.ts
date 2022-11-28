import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateParameter200ApplicationJsonActionEnum {
    CreateParameter = "createParameter"
}


// CreateParameter200ApplicationJsonData
/** 
 * Parameters
**/
export class CreateParameter200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: shared.Parameter })
  parameters: shared.Parameter[];
}

export enum CreateParameter200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class CreateParameter200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CreateParameter200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CreateParameter200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: CreateParameter200ApplicationJsonResultEnum;
}


export class CreateParameterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Parameter;
}


export class CreateParameterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createParameter200ApplicationJsonObject?: CreateParameter200ApplicationJson;
}
