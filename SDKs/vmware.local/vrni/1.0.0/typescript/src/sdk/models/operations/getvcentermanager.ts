import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVcenterManagerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVcenterManagerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetVcenterManagerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetVcenterManagerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVcenterManagerPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVcenterManagerQueryParams;

  @SpeakeasyMetadata()
  security: GetVcenterManagerSecurity;
}


export class GetVcenterManagerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vCenterManager?: shared.VCenterManager;
}
