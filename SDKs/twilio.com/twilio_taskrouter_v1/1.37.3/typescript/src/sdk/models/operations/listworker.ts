import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListWorkerServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class ListWorkerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListWorkerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ActivityName" })
  activityName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ActivitySid" })
  activitySid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Available" })
  available?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ordering" })
  ordering?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetWorkersExpression" })
  targetWorkersExpression?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskQueueName" })
  taskQueueName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskQueueSid" })
  taskQueueSid?: string;
}


export class ListWorkerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWorkerListWorkerResponseMeta extends SpeakeasyBase {
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


export class ListWorkerListWorkerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListWorkerListWorkerResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=workers", elemType: shared.TaskrouterV1WorkspaceWorker })
  workers?: shared.TaskrouterV1WorkspaceWorker[];
}


export class ListWorkerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListWorkerPathParams;

  @SpeakeasyMetadata()
  queryParams: ListWorkerQueryParams;

  @SpeakeasyMetadata()
  security: ListWorkerSecurity;
}


export class ListWorkerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listWorkerResponse?: ListWorkerListWorkerResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
