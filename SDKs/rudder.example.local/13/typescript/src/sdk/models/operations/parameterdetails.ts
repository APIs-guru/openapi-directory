import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ParameterDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parameterId" })
  parameterId: string;
}


export class ParameterDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ParameterDetailsPathParams;
}

export enum ParameterDetails200ApplicationJsonActionEnum {
    ParameterDetails = "parameterDetails"
}


// ParameterDetails200ApplicationJsonData
/** 
 * Parameters
**/
export class ParameterDetails200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters", elemType: shared.Parameter })
  parameters: shared.Parameter[];
}

export enum ParameterDetails200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ParameterDetails200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ParameterDetails200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ParameterDetails200ApplicationJsonData;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=result" })
  result: ParameterDetails200ApplicationJsonResultEnum;
}


export class ParameterDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  parameterDetails200ApplicationJsonObject?: ParameterDetails200ApplicationJson;
}
