import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateRateLimitServerList = [
	"https://verify.twilio.com",
] as const;


export class UpdateRateLimitPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateRateLimitUpdateRateLimitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Description;" })
  description?: string;
}


export class UpdateRateLimitSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRateLimitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateRateLimitPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateRateLimitUpdateRateLimitRequest;

  @SpeakeasyMetadata()
  security: UpdateRateLimitSecurity;
}


export class UpdateRateLimitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2ServiceRateLimit?: shared.VerifyV2ServiceRateLimit;
}
