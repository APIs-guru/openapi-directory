import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTTASK_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class ListTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AssignmentStatus" })
  assignmentStatus?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=EvaluateTaskAttributes" })
  evaluateTaskAttributes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HasAddons" })
  hasAddons?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ordering" })
  ordering?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Priority" })
  priority?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskQueueName" })
  taskQueueName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskQueueSid" })
  taskQueueSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=WorkflowName" })
  workflowName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=WorkflowSid" })
  workflowSid?: string;
}


export class ListTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTaskRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListTaskPathParams;

  @Metadata()
  queryParams: ListTaskQueryParams;

  @Metadata()
  security: ListTaskSecurity;
}


export class ListTaskListTaskResponseMeta extends SpeakeasyBase {
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


export class ListTaskListTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListTaskListTaskResponseMeta;

  @Metadata({ data: "json, name=tasks", elemType: shared.TaskrouterV1WorkspaceTask })
  tasks?: shared.TaskrouterV1WorkspaceTask[];
}


export class ListTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTaskResponse?: ListTaskListTaskResponse;

  @Metadata()
  statusCode: number;
}
