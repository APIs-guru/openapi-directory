import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTWORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class ListWorkflowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListWorkflowQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListWorkflowSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWorkflowRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListWorkflowPathParams;

  @Metadata()
  queryParams: ListWorkflowQueryParams;

  @Metadata()
  security: ListWorkflowSecurity;
}


export class ListWorkflowListWorkflowResponseMeta extends SpeakeasyBase {
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


export class ListWorkflowListWorkflowResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListWorkflowListWorkflowResponseMeta;

  @Metadata({ data: "json, name=workflows", elemType: shared.TaskrouterV1WorkspaceWorkflow })
  workflows?: shared.TaskrouterV1WorkspaceWorkflow[];
}


export class ListWorkflowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWorkflowResponse?: ListWorkflowListWorkflowResponse;

  @Metadata()
  statusCode: number;
}
