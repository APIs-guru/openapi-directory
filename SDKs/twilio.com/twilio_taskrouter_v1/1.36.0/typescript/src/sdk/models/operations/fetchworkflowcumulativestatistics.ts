import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHWORKFLOWCUMULATIVESTATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class FetchWorkflowCumulativeStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkflowSid" })
  workflowSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchWorkflowCumulativeStatisticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Minutes" })
  minutes?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SplitByWaitTime" })
  splitByWaitTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;
}


export class FetchWorkflowCumulativeStatisticsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWorkflowCumulativeStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchWorkflowCumulativeStatisticsPathParams;

  @Metadata()
  queryParams: FetchWorkflowCumulativeStatisticsQueryParams;

  @Metadata()
  security: FetchWorkflowCumulativeStatisticsSecurity;
}


export class FetchWorkflowCumulativeStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics?: shared.TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics;
}
