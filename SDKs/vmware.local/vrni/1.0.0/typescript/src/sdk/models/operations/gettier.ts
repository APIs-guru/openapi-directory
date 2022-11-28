import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tier-id" })
  tierId: string;
}


export class GetTierHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTierSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetTierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTierPathParams;

  @SpeakeasyMetadata()
  headers: GetTierHeaders;

  @SpeakeasyMetadata()
  security: GetTierSecurity;
}


export class GetTierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tier?: shared.Tier;
}
