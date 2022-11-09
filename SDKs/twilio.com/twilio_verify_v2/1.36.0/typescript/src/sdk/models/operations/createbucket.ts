import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEBUCKET_SERVERS = [
	"https://verify.twilio.com",
];



export class CreateBucketPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=RateLimitSid" })
  rateLimitSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateBucketCreateBucketRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Interval;" })
  interval: number;

  @Metadata({ data: "form, name=Max;" })
  max: number;
}


export class CreateBucketSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateBucketRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateBucketPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateBucketCreateBucketRequest;

  @Metadata()
  security: CreateBucketSecurity;
}


export class CreateBucketResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceRateLimitBucket?: shared.VerifyV2ServiceRateLimitBucket;
}
