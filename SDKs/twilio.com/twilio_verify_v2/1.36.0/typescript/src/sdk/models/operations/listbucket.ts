import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTBUCKET_SERVERS = [
	"https://verify.twilio.com",
];



export class ListBucketPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=RateLimitSid" })
  rateLimitSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListBucketQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListBucketSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBucketRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListBucketPathParams;

  @Metadata()
  queryParams: ListBucketQueryParams;

  @Metadata()
  security: ListBucketSecurity;
}


export class ListBucketListBucketResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListBucketListBucketResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=buckets", elemType: shared.VerifyV2ServiceRateLimitBucket })
  buckets?: shared.VerifyV2ServiceRateLimitBucket[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListBucketListBucketResponseMeta;
}


export class ListBucketResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBucketResponse?: ListBucketListBucketResponse;

  @Metadata()
  statusCode: number;
}
