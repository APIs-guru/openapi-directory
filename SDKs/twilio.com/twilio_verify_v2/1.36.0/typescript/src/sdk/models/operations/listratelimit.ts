import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTRATELIMIT_SERVERS = [
	"https://verify.twilio.com",
];



export class ListRateLimitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListRateLimitQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRateLimitSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRateLimitRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListRateLimitPathParams;

  @Metadata()
  queryParams: ListRateLimitQueryParams;

  @Metadata()
  security: ListRateLimitSecurity;
}


export class ListRateLimitListRateLimitResponseMeta extends SpeakeasyBase {
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


export class ListRateLimitListRateLimitResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListRateLimitListRateLimitResponseMeta;

  @Metadata({ data: "json, name=rate_limits", elemType: shared.VerifyV2ServiceRateLimit })
  rateLimits?: shared.VerifyV2ServiceRateLimit[];
}


export class ListRateLimitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRateLimitResponse?: ListRateLimitListRateLimitResponse;

  @Metadata()
  statusCode: number;
}
