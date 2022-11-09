import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiInformationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=endpointName" })
  endpointName: string;
}


export class ApiInformationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApiInformationsPathParams;
}

export enum ApiInformations200ApplicationJsonActionEnum {
    ApiInformations = "apiInformations"
}


// ApiInformations200ApplicationJsonDataEndpoints
/** 
 * Supported path and version for that endpoint
**/
export class ApiInformations200ApplicationJsonDataEndpoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpVerb" })
  httpVerb?: any;

  @Metadata({ data: "json, name=version" })
  version?: shared.ApiVersion;
}


export class ApiInformations200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation" })
  documentation: string;

  @Metadata({ data: "json, name=endpointName" })
  endpointName: string;

  @Metadata({ data: "json, name=endpoints", elemType: operations.ApiInformations200ApplicationJsonDataEndpoints })
  endpoints: ApiInformations200ApplicationJsonDataEndpoints[];
}

export enum ApiInformations200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ApiInformations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ApiInformations200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ApiInformations200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ApiInformations200ApplicationJsonResultEnum;
}


export class ApiInformationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiInformations200ApplicationJsonObject?: ApiInformations200ApplicationJson;
}
