import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistributedVirtualSwitchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistributedVirtualSwitchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetDistributedVirtualSwitchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetDistributedVirtualSwitchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistributedVirtualSwitchPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDistributedVirtualSwitchQueryParams;

  @SpeakeasyMetadata()
  security: GetDistributedVirtualSwitchSecurity;
}


export class GetDistributedVirtualSwitchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  distributedVirtualSwitch?: shared.DistributedVirtualSwitch;

  @SpeakeasyMetadata()
  statusCode: number;
}
