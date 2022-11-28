import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateBucketServerList = [
	"https://verify.twilio.com",
] as const;


export class CreateBucketPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RateLimitSid" })
  rateLimitSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateBucketCreateBucketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Interval;" })
  interval: number;

  @SpeakeasyMetadata({ data: "form, name=Max;" })
  max: number;
}


export class CreateBucketSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateBucketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateBucketPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateBucketCreateBucketRequest;

  @SpeakeasyMetadata()
  security: CreateBucketSecurity;
}


export class CreateBucketResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2ServiceRateLimitBucket?: shared.VerifyV2ServiceRateLimitBucket;
}
