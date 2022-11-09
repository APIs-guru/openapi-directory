import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTWORKERCHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class ListWorkerChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkerSid" })
  workerSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListWorkerChannelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListWorkerChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWorkerChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListWorkerChannelPathParams;

  @Metadata()
  queryParams: ListWorkerChannelQueryParams;

  @Metadata()
  security: ListWorkerChannelSecurity;
}


export class ListWorkerChannelListWorkerChannelResponseMeta extends SpeakeasyBase {
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


export class ListWorkerChannelListWorkerChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels", elemType: shared.TaskrouterV1WorkspaceWorkerWorkerChannel })
  channels?: shared.TaskrouterV1WorkspaceWorkerWorkerChannel[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListWorkerChannelListWorkerChannelResponseMeta;
}


export class ListWorkerChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWorkerChannelResponse?: ListWorkerChannelListWorkerChannelResponse;

  @Metadata()
  statusCode: number;
}
