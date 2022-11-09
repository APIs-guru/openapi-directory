import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATERATELIMIT_SERVERS = [
	"https://verify.twilio.com",
];



export class UpdateRateLimitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateRateLimitUpdateRateLimitRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Description;" })
  description?: string;
}


export class UpdateRateLimitSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRateLimitRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateRateLimitPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateRateLimitUpdateRateLimitRequest;

  @Metadata()
  security: UpdateRateLimitSecurity;
}


export class UpdateRateLimitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceRateLimit?: shared.VerifyV2ServiceRateLimit;
}
