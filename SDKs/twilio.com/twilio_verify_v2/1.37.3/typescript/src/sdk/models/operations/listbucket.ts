import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListBucketServerList = [
	"https://verify.twilio.com",
] as const;


export class ListBucketPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RateLimitSid" })
  rateLimitSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListBucketQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListBucketSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBucketListBucketResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListBucketListBucketResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buckets", elemType: shared.VerifyV2ServiceRateLimitBucket })
  buckets?: shared.VerifyV2ServiceRateLimitBucket[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListBucketListBucketResponseMeta;
}


export class ListBucketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListBucketPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBucketQueryParams;

  @SpeakeasyMetadata()
  security: ListBucketSecurity;
}


export class ListBucketResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listBucketResponse?: ListBucketListBucketResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
