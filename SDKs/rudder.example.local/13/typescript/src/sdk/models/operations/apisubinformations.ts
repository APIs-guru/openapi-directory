import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiSubInformationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sectionId" })
  sectionId: string;
}


export class ApiSubInformationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApiSubInformationsPathParams;
}

export enum ApiSubInformations200ApplicationJsonActionEnum {
    ApiSubInformations = "apiSubInformations"
}


export class ApiSubInformations200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableVersions", elemType: shared.ApiVersions })
  availableVersions: shared.ApiVersions[];

  @Metadata({ data: "json, name=documentation" })
  documentation: string;

  @Metadata({ data: "json, name=endpoints", elemType: shared.ApiEndpoints, elemDepth: 2 })
  endpoints: shared.ApiEndpoints[][];
}

export enum ApiSubInformations200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ApiSubInformations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ApiSubInformations200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ApiSubInformations200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ApiSubInformations200ApplicationJsonResultEnum;
}


export class ApiSubInformationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiSubInformations200ApplicationJsonObject?: ApiSubInformations200ApplicationJson;
}
