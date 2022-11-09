import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApplicationTierPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tier-id" })
  tierId: string;
}


export class GetApplicationTierSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetApplicationTierRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApplicationTierPathParams;

  @Metadata()
  security: GetApplicationTierSecurity;
}


export class GetApplicationTierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tier?: shared.Tier;
}
