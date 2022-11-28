import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ParameterDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parameterId" })
  parameterId: string;
}

export enum ParameterDetails200ApplicationJsonActionEnum {
    ParameterDetails = "parameterDetails"
}


// ParameterDetails200ApplicationJsonData
/** 
 * Parameters
**/
export class ParameterDetails200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: shared.Parameter })
  parameters: shared.Parameter[];
}

export enum ParameterDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ParameterDetails200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ParameterDetails200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ParameterDetails200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ParameterDetails200ApplicationJsonResultEnum;
}


export class ParameterDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ParameterDetailsPathParams;
}


export class ParameterDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  parameterDetails200ApplicationJsonObject?: ParameterDetails200ApplicationJson;
}
