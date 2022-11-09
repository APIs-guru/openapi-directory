import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTWORKER_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class ListWorkerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListWorkerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ActivityName" })
  activityName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ActivitySid" })
  activitySid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Available" })
  available?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetWorkersExpression" })
  targetWorkersExpression?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskQueueName" })
  taskQueueName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskQueueSid" })
  taskQueueSid?: string;
}


export class ListWorkerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWorkerRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListWorkerPathParams;

  @Metadata()
  queryParams: ListWorkerQueryParams;

  @Metadata()
  security: ListWorkerSecurity;
}


export class ListWorkerListWorkerResponseMeta extends SpeakeasyBase {
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


export class ListWorkerListWorkerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListWorkerListWorkerResponseMeta;

  @Metadata({ data: "json, name=workers", elemType: shared.TaskrouterV1WorkspaceWorker })
  workers?: shared.TaskrouterV1WorkspaceWorker[];
}


export class ListWorkerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWorkerResponse?: ListWorkerListWorkerResponse;

  @Metadata()
  statusCode: number;
}
