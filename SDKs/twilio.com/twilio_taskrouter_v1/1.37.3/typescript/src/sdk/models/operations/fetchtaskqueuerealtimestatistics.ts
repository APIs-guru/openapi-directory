import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchTaskQueueRealTimeStatisticsServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class FetchTaskQueueRealTimeStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskQueueSid" })
  taskQueueSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchTaskQueueRealTimeStatisticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;
}


export class FetchTaskQueueRealTimeStatisticsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTaskQueueRealTimeStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchTaskQueueRealTimeStatisticsPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchTaskQueueRealTimeStatisticsQueryParams;

  @SpeakeasyMetadata()
  security: FetchTaskQueueRealTimeStatisticsSecurity;
}


export class FetchTaskQueueRealTimeStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics?: shared.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics;
}
