import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTTASKQUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class ListTaskQueuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListTaskQueueQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EvaluateWorkerAttributes" })
  evaluateWorkerAttributes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=WorkerSid" })
  workerSid?: string;
}


export class ListTaskQueueSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTaskQueueRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListTaskQueuePathParams;

  @Metadata()
  queryParams: ListTaskQueueQueryParams;

  @Metadata()
  security: ListTaskQueueSecurity;
}


export class ListTaskQueueListTaskQueueResponseMeta extends SpeakeasyBase {
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


export class ListTaskQueueListTaskQueueResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListTaskQueueListTaskQueueResponseMeta;

  @Metadata({ data: "json, name=task_queues", elemType: shared.TaskrouterV1WorkspaceTaskQueue })
  taskQueues?: shared.TaskrouterV1WorkspaceTaskQueue[];
}


export class ListTaskQueueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTaskQueueResponse?: ListTaskQueueListTaskQueueResponse;

  @Metadata()
  statusCode: number;
}
