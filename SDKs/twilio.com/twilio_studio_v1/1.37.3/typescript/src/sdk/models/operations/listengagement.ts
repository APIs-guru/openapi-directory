import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListEngagementServerList = [
	"https://studio.twilio.com",
] as const;


export class ListEngagementPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;
}


export class ListEngagementQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListEngagementSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEngagementListEngagementResponseMeta extends SpeakeasyBase {
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


export class ListEngagementListEngagementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=engagements", elemType: shared.StudioV1FlowEngagement })
  engagements?: shared.StudioV1FlowEngagement[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListEngagementListEngagementResponseMeta;
}


export class ListEngagementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListEngagementPathParams;

  @SpeakeasyMetadata()
  queryParams: ListEngagementQueryParams;

  @SpeakeasyMetadata()
  security: ListEngagementSecurity;
}


export class ListEngagementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listEngagementResponse?: ListEngagementListEngagementResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
