import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApplicationTierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tier-id" })
  tierId: string;
}


export class GetApplicationTierSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetApplicationTierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApplicationTierPathParams;

  @SpeakeasyMetadata()
  security: GetApplicationTierSecurity;
}


export class GetApplicationTierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tier?: shared.Tier;
}
