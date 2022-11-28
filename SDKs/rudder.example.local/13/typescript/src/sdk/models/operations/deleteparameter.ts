import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteParameterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parameterId" })
  parameterId: string;
}

export enum DeleteParameter200ApplicationJsonActionEnum {
    DeleteParameter = "deleteParameter"
}


// DeleteParameter200ApplicationJsonData
/** 
 * Parameters
**/
export class DeleteParameter200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: shared.Parameter })
  parameters: shared.Parameter[];
}

export enum DeleteParameter200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class DeleteParameter200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: DeleteParameter200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: DeleteParameter200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: DeleteParameter200ApplicationJsonResultEnum;
}

export enum DeleteParameter500ApplicationJsonActionEnum {
    DeleteParameter = "deleteParameter"
}

export enum DeleteParameter500ApplicationJsonResultEnum {
    Error = "error"
}


export class DeleteParameter500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: DeleteParameter500ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDetails" })
  errorDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: DeleteParameter500ApplicationJsonResultEnum;
}


export class DeleteParameterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteParameterPathParams;
}


export class DeleteParameterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteParameter200ApplicationJsonObject?: DeleteParameter200ApplicationJson;

  @SpeakeasyMetadata()
  deleteParameter500ApplicationJsonObject?: DeleteParameter500ApplicationJson;
}
