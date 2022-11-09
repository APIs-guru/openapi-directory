import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSYNCSTREAM_SERVERS = [
	"https://sync.twilio.com",
];



export class ListSyncStreamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncStreamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncStreamSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncStreamRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSyncStreamPathParams;

  @Metadata()
  queryParams: ListSyncStreamQueryParams;

  @Metadata()
  security: ListSyncStreamSecurity;
}


export class ListSyncStreamListSyncStreamResponseMeta extends SpeakeasyBase {
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


export class ListSyncStreamListSyncStreamResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSyncStreamListSyncStreamResponseMeta;

  @Metadata({ data: "json, name=streams", elemType: shared.SyncV1ServiceSyncStream })
  streams?: shared.SyncV1ServiceSyncStream[];
}


export class ListSyncStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSyncStreamResponse?: ListSyncStreamListSyncStreamResponse;

  @Metadata()
  statusCode: number;
}
