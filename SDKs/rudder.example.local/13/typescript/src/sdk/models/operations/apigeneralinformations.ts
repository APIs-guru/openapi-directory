import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ApiGeneralInformations200ApplicationJsonActionEnum {
    ApiGeneralInformations = "apiGeneralInformations"
}


export class ApiGeneralInformations200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableVersions", elemType: shared.ApiVersions })
  availableVersions: shared.ApiVersions[];

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation: string;

  @SpeakeasyMetadata({ data: "json, name=endpoints", elemType: shared.ApiEndpoints, elemDepth: 2 })
  endpoints: shared.ApiEndpoints[][];
}

export enum ApiGeneralInformations200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ApiGeneralInformations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ApiGeneralInformations200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ApiGeneralInformations200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ApiGeneralInformations200ApplicationJsonResultEnum;
}


export class ApiGeneralInformationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiGeneralInformations200ApplicationJsonObject?: ApiGeneralInformations200ApplicationJson;
}
