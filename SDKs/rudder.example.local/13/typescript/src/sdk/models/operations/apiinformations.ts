import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiInformationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=endpointName" })
  endpointName: string;
}

export enum ApiInformations200ApplicationJsonActionEnum {
    ApiInformations = "apiInformations"
}


// ApiInformations200ApplicationJsonDataEndpoints
/** 
 * Supported path and version for that endpoint
**/
export class ApiInformations200ApplicationJsonDataEndpoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpVerb" })
  httpVerb?: any;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: shared.ApiVersion;
}


export class ApiInformations200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation: string;

  @SpeakeasyMetadata({ data: "json, name=endpointName" })
  endpointName: string;

  @SpeakeasyMetadata({ data: "json, name=endpoints", elemType: ApiInformations200ApplicationJsonDataEndpoints })
  endpoints: ApiInformations200ApplicationJsonDataEndpoints[];
}

export enum ApiInformations200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ApiInformations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ApiInformations200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ApiInformations200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ApiInformations200ApplicationJsonResultEnum;
}


export class ApiInformationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApiInformationsPathParams;
}


export class ApiInformationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiInformations200ApplicationJsonObject?: ApiInformations200ApplicationJson;
}
