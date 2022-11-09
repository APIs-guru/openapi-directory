import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistributedVirtualSwitchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistributedVirtualSwitchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetDistributedVirtualSwitchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetDistributedVirtualSwitchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistributedVirtualSwitchPathParams;

  @Metadata()
  queryParams: GetDistributedVirtualSwitchQueryParams;

  @Metadata()
  security: GetDistributedVirtualSwitchSecurity;
}


export class GetDistributedVirtualSwitchResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  distributedVirtualSwitch?: shared.DistributedVirtualSwitch;

  @Metadata()
  statusCode: number;
}
