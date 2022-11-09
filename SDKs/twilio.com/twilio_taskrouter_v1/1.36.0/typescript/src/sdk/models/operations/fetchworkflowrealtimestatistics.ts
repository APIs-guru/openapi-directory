import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHWORKFLOWREALTIMESTATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class FetchWorkflowRealTimeStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkflowSid" })
  workflowSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchWorkflowRealTimeStatisticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;
}


export class FetchWorkflowRealTimeStatisticsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWorkflowRealTimeStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchWorkflowRealTimeStatisticsPathParams;

  @Metadata()
  queryParams: FetchWorkflowRealTimeStatisticsQueryParams;

  @Metadata()
  security: FetchWorkflowRealTimeStatisticsSecurity;
}


export class FetchWorkflowRealTimeStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics?: shared.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics;
}
