import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATERATELIMIT_SERVERS = [
	"https://verify.twilio.com",
];



export class CreateRateLimitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateRateLimitCreateRateLimitRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Description;" })
  description?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName: string;
}


export class CreateRateLimitSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateRateLimitRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateRateLimitPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateRateLimitCreateRateLimitRequest;

  @Metadata()
  security: CreateRateLimitSecurity;
}


export class CreateRateLimitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceRateLimit?: shared.VerifyV2ServiceRateLimit;
}
