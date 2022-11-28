import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListTaskServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class ListTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AssignmentStatus" })
  assignmentStatus?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EvaluateTaskAttributes" })
  evaluateTaskAttributes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HasAddons" })
  hasAddons?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ordering" })
  ordering?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskQueueName" })
  taskQueueName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskQueueSid" })
  taskQueueSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=WorkflowName" })
  workflowName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=WorkflowSid" })
  workflowSid?: string;
}


export class ListTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTaskListTaskResponseMeta extends SpeakeasyBase {
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


export class ListTaskListTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListTaskListTaskResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: shared.TaskrouterV1WorkspaceTask })
  tasks?: shared.TaskrouterV1WorkspaceTask[];
}


export class ListTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: ListTaskQueryParams;

  @SpeakeasyMetadata()
  security: ListTaskSecurity;
}


export class ListTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listTaskResponse?: ListTaskListTaskResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
