import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTTASKCHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class ListTaskChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListTaskChannelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListTaskChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTaskChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListTaskChannelPathParams;

  @Metadata()
  queryParams: ListTaskChannelQueryParams;

  @Metadata()
  security: ListTaskChannelSecurity;
}


export class ListTaskChannelListTaskChannelResponseMeta extends SpeakeasyBase {
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


export class ListTaskChannelListTaskChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels", elemType: shared.TaskrouterV1WorkspaceTaskChannel })
  channels?: shared.TaskrouterV1WorkspaceTaskChannel[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListTaskChannelListTaskChannelResponseMeta;
}


export class ListTaskChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTaskChannelResponse?: ListTaskChannelListTaskChannelResponse;

  @Metadata()
  statusCode: number;
}
