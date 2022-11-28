import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetServiceGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetServiceGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetServiceGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetServiceGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetServiceGroupPathParams;

  @SpeakeasyMetadata()
  queryParams: GetServiceGroupQueryParams;

  @SpeakeasyMetadata()
  security: GetServiceGroupSecurity;
}


export class GetServiceGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  group?: shared.Group;

  @SpeakeasyMetadata()
  statusCode: number;
}
