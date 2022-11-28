import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSyncStreamServerList = [
	"https://sync.twilio.com",
] as const;


export class ListSyncStreamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSyncStreamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSyncStreamSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSyncStreamListSyncStreamResponseMeta extends SpeakeasyBase {
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


export class ListSyncStreamListSyncStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSyncStreamListSyncStreamResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=streams", elemType: shared.SyncV1ServiceSyncStream })
  streams?: shared.SyncV1ServiceSyncStream[];
}


export class ListSyncStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSyncStreamPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSyncStreamQueryParams;

  @SpeakeasyMetadata()
  security: ListSyncStreamSecurity;
}


export class ListSyncStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSyncStreamResponse?: ListSyncStreamListSyncStreamResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
