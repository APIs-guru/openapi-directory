import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHWORKSPACEREALTIMESTATISTICS_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class FetchWorkspaceRealTimeStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class FetchWorkspaceRealTimeStatisticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;
}


export class FetchWorkspaceRealTimeStatisticsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWorkspaceRealTimeStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchWorkspaceRealTimeStatisticsPathParams;

  @Metadata()
  queryParams: FetchWorkspaceRealTimeStatisticsQueryParams;

  @Metadata()
  security: FetchWorkspaceRealTimeStatisticsSecurity;
}


export class FetchWorkspaceRealTimeStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceWorkspaceRealTimeStatistics?: shared.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics;
}
