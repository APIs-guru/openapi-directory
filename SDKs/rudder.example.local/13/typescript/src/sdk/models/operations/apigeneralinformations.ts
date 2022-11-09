import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ApiGeneralInformations200ApplicationJsonActionEnum {
    ApiGeneralInformations = "apiGeneralInformations"
}


export class ApiGeneralInformations200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableVersions", elemType: shared.ApiVersions })
  availableVersions: shared.ApiVersions[];

  @Metadata({ data: "json, name=documentation" })
  documentation: string;

  @Metadata({ data: "json, name=endpoints", elemType: shared.ApiEndpoints, elemDepth: 2 })
  endpoints: shared.ApiEndpoints[][];
}

export enum ApiGeneralInformations200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ApiGeneralInformations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ApiGeneralInformations200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ApiGeneralInformations200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ApiGeneralInformations200ApplicationJsonResultEnum;
}


export class ApiGeneralInformationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiGeneralInformations200ApplicationJsonObject?: ApiGeneralInformations200ApplicationJson;
}
