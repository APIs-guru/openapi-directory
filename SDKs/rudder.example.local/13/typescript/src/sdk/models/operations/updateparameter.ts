import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateParameterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parameterId" })
  parameterId: string;
}


export class UpdateParameterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateParameterPathParams;
}

export enum UpdateParameter200ApplicationJsonActionEnum {
    UpdateParameter = "updateParameter"
}


// UpdateParameter200ApplicationJsonData
/** 
 * Parameters
**/
export class UpdateParameter200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters", elemType: shared.Parameter })
  parameters: shared.Parameter[];
}

export enum UpdateParameter200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateParameter200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UpdateParameter200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: UpdateParameter200ApplicationJsonData;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=result" })
  result: UpdateParameter200ApplicationJsonResultEnum;
}


export class UpdateParameterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateParameter200ApplicationJsonObject?: UpdateParameter200ApplicationJson;
}
