import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddTierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AddTierSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class AddTierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddTierPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TierRequest;

  @SpeakeasyMetadata()
  security: AddTierSecurity;
}


export class AddTierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tier?: shared.Tier;
}
