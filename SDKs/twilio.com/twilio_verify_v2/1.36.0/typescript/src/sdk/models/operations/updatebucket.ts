import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEBUCKET_SERVERS = [
	"https://verify.twilio.com",
];



export class UpdateBucketPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=RateLimitSid" })
  rateLimitSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateBucketUpdateBucketRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Interval;" })
  interval?: number;

  @Metadata({ data: "form, name=Max;" })
  max?: number;
}


export class UpdateBucketSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateBucketRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateBucketPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateBucketUpdateBucketRequest;

  @Metadata()
  security: UpdateBucketSecurity;
}


export class UpdateBucketResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceRateLimitBucket?: shared.VerifyV2ServiceRateLimitBucket;
}
