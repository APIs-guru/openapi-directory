import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTACTIVITY_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class ListActivityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListActivityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Available" })
  available?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListActivitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListActivityRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListActivityPathParams;

  @Metadata()
  queryParams: ListActivityQueryParams;

  @Metadata()
  security: ListActivitySecurity;
}


export class ListActivityListActivityResponseMeta extends SpeakeasyBase {
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


export class ListActivityListActivityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activities", elemType: shared.TaskrouterV1WorkspaceActivity })
  activities?: shared.TaskrouterV1WorkspaceActivity[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListActivityListActivityResponseMeta;
}


export class ListActivityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listActivityResponse?: ListActivityListActivityResponse;

  @Metadata()
  statusCode: number;
}
