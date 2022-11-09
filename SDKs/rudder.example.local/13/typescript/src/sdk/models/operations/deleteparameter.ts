import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteParameterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parameterId" })
  parameterId: string;
}


export class DeleteParameterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteParameterPathParams;
}

export enum DeleteParameter200ApplicationJsonActionEnum {
    DeleteParameter = "deleteParameter"
}


// DeleteParameter200ApplicationJsonData
/** 
 * Parameters
**/
export class DeleteParameter200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters", elemType: shared.Parameter })
  parameters: shared.Parameter[];
}

export enum DeleteParameter200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class DeleteParameter200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: DeleteParameter200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: DeleteParameter200ApplicationJsonData;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=result" })
  result: DeleteParameter200ApplicationJsonResultEnum;
}

export enum DeleteParameter500ApplicationJsonActionEnum {
    DeleteParameter = "deleteParameter"
}

export enum DeleteParameter500ApplicationJsonResultEnum {
    Error = "error"
}


export class DeleteParameter500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: DeleteParameter500ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=errorDetails" })
  errorDetails?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=result" })
  result: DeleteParameter500ApplicationJsonResultEnum;
}


export class DeleteParameterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteParameter200ApplicationJsonObject?: DeleteParameter200ApplicationJson;

  @Metadata()
  deleteParameter500ApplicationJsonObject?: DeleteParameter500ApplicationJson;
}
