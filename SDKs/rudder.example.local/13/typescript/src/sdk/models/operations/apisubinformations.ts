import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiSubInformationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sectionId" })
  sectionId: string;
}

export enum ApiSubInformations200ApplicationJsonActionEnum {
    ApiSubInformations = "apiSubInformations"
}


export class ApiSubInformations200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableVersions", elemType: shared.ApiVersions })
  availableVersions: shared.ApiVersions[];

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation: string;

  @SpeakeasyMetadata({ data: "json, name=endpoints", elemType: shared.ApiEndpoints, elemDepth: 2 })
  endpoints: shared.ApiEndpoints[][];
}

export enum ApiSubInformations200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ApiSubInformations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ApiSubInformations200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ApiSubInformations200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ApiSubInformations200ApplicationJsonResultEnum;
}


export class ApiSubInformationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApiSubInformationsPathParams;
}


export class ApiSubInformationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiSubInformations200ApplicationJsonObject?: ApiSubInformations200ApplicationJson;
}
