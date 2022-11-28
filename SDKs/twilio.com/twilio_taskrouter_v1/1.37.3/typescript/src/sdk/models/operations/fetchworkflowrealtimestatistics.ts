import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchWorkflowRealTimeStatisticsServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class FetchWorkflowRealTimeStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkflowSid" })
  workflowSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchWorkflowRealTimeStatisticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;
}


export class FetchWorkflowRealTimeStatisticsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWorkflowRealTimeStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchWorkflowRealTimeStatisticsPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchWorkflowRealTimeStatisticsQueryParams;

  @SpeakeasyMetadata()
  security: FetchWorkflowRealTimeStatisticsSecurity;
}


export class FetchWorkflowRealTimeStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics?: shared.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics;
}
