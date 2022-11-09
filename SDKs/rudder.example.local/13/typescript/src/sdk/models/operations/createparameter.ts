import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateParameterRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Parameter;
}

export enum CreateParameter200ApplicationJsonActionEnum {
    CreateParameter = "createParameter"
}


// CreateParameter200ApplicationJsonData
/** 
 * Parameters
**/
export class CreateParameter200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters", elemType: shared.Parameter })
  parameters: shared.Parameter[];
}

export enum CreateParameter200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class CreateParameter200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: CreateParameter200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: CreateParameter200ApplicationJsonData;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=result" })
  result: CreateParameter200ApplicationJsonResultEnum;
}


export class CreateParameterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createParameter200ApplicationJsonObject?: CreateParameter200ApplicationJson;
}
