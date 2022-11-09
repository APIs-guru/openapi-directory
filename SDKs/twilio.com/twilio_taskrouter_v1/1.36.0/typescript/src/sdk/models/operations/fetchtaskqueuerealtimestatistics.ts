import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHTASKQUEUEREALTIMESTATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class FetchTaskQueueRealTimeStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskQueueSid" })
  taskQueueSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchTaskQueueRealTimeStatisticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;
}


export class FetchTaskQueueRealTimeStatisticsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTaskQueueRealTimeStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchTaskQueueRealTimeStatisticsPathParams;

  @Metadata()
  queryParams: FetchTaskQueueRealTimeStatisticsQueryParams;

  @Metadata()
  security: FetchTaskQueueRealTimeStatisticsSecurity;
}


export class FetchTaskQueueRealTimeStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics?: shared.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics;
}
