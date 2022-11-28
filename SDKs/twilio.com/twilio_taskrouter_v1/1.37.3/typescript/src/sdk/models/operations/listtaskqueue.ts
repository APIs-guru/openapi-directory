import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListTaskQueueServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class ListTaskQueuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListTaskQueueQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EvaluateWorkerAttributes" })
  evaluateWorkerAttributes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ordering" })
  ordering?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=WorkerSid" })
  workerSid?: string;
}


export class ListTaskQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTaskQueueListTaskQueueResponseMeta extends SpeakeasyBase {
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


export class ListTaskQueueListTaskQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListTaskQueueListTaskQueueResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=task_queues", elemType: shared.TaskrouterV1WorkspaceTaskQueue })
  taskQueues?: shared.TaskrouterV1WorkspaceTaskQueue[];
}


export class ListTaskQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListTaskQueuePathParams;

  @SpeakeasyMetadata()
  queryParams: ListTaskQueueQueryParams;

  @SpeakeasyMetadata()
  security: ListTaskQueueSecurity;
}


export class ListTaskQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listTaskQueueResponse?: ListTaskQueueListTaskQueueResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
