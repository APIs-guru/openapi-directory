import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddTierPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AddTierSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class AddTierRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddTierPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TierRequest;

  @Metadata()
  security: AddTierSecurity;
}


export class AddTierResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tier?: shared.Tier;
}
