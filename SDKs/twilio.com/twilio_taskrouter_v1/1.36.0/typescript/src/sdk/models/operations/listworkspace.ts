import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTWORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class ListWorkspaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListWorkspaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListWorkspaceQueryParams;

  @Metadata()
  security: ListWorkspaceSecurity;
}


export class ListWorkspaceListWorkspaceResponseMeta extends SpeakeasyBase {
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


export class ListWorkspaceListWorkspaceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListWorkspaceListWorkspaceResponseMeta;

  @Metadata({ data: "json, name=workspaces", elemType: shared.TaskrouterV1Workspace })
  workspaces?: shared.TaskrouterV1Workspace[];
}


export class ListWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWorkspaceResponse?: ListWorkspaceListWorkspaceResponse;

  @Metadata()
  statusCode: number;
}
