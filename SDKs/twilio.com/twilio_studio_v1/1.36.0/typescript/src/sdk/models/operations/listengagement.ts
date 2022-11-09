import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTENGAGEMENT_SERVERS = [
	"https://studio.twilio.com",
];



export class ListEngagementPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;
}


export class ListEngagementQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListEngagementSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEngagementRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListEngagementPathParams;

  @Metadata()
  queryParams: ListEngagementQueryParams;

  @Metadata()
  security: ListEngagementSecurity;
}


export class ListEngagementListEngagementResponseMeta extends SpeakeasyBase {
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


export class ListEngagementListEngagementResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=engagements", elemType: shared.StudioV1FlowEngagement })
  engagements?: shared.StudioV1FlowEngagement[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListEngagementListEngagementResponseMeta;
}


export class ListEngagementResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listEngagementResponse?: ListEngagementListEngagementResponse;

  @Metadata()
  statusCode: number;
}
