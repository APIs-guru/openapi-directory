import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateParameterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parameterId" })
  parameterId: string;
}

export enum UpdateParameter200ApplicationJsonActionEnum {
    UpdateParameter = "updateParameter"
}


// UpdateParameter200ApplicationJsonData
/** 
 * Parameters
**/
export class UpdateParameter200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: shared.Parameter })
  parameters: shared.Parameter[];
}

export enum UpdateParameter200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class UpdateParameter200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateParameter200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: UpdateParameter200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: UpdateParameter200ApplicationJsonResultEnum;
}


export class UpdateParameterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateParameterPathParams;
}


export class UpdateParameterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateParameter200ApplicationJsonObject?: UpdateParameter200ApplicationJson;
}
